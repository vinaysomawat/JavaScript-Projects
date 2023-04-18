var commentFeedObj = [];
var commentID = 0;

function postComment() {
	let username = document.getElementById("username").value;
	let comment = document.getElementById("comment").value;

	let newObj = {
		id: commentID++,
		likes: 0,
		username: username,
		comment: comment,
	};
	console.log("newObj", newObj);
	console.log("commentFeedObj", commentFeedObj);
	commentFeedObj.push(newObj);
	addComment(newObj);
	setLocalStorage();
}

function addComment(obj) {
	[a, b, c, d] = createCommentElements(obj);
	document.getElementById("comment-container").append(a);
	document.getElementById("comment-container").append(b);
	document.getElementById("comment-container").append(c);
	document.getElementById("comment-container").append(d);
}

function createCommentElements(obj) {
	let pUserName = document.createElement("p");
	pUserName.className = "user-text";
	pUserName.innerHTML = obj["username"];

	let pComment = document.createElement("p");
	pComment.className = "comment-text";
	pComment.innerHTML = obj["comment"];

	let likeBtn = document.createElement("button");
	likeBtn.innerHTML = "Like";
	likeBtn.onclick = function () {
		likeComment(this);
	};
	likeBtn.className = "like-btn";
	likeBtn.id = obj["id"];

	let likeSpan = document.createElement("span");
	likeSpan.className = "like-count";
	likeSpan.innerHTML = obj["likes"];
	likeSpan.id = "like-count-" + obj["id"];
	likeBtn.append(likeSpan);

	let replyBtn = document.createElement("button");
	replyBtn.innerHTML = "Reply";
	replyBtn.onclick = function () {
		replyOnComment(this);
	};
	replyBtn.id = 'reply' + obj["id"];

	return [pUserName, pComment, likeBtn, replyBtn];
}

function likeComment(event) {
	console.log("event ID ", event.id);
	let obj = commentFeedObj.find((o) => o.id == event.id);
	obj["likes"] += 1;
	document.getElementById("like-count-" + event.id).innerHTML = obj["likes"];
	setLocalStorage();
}

function replyOnComment(event) {
    let divContainer = document.createElement('div');
    divContainer.className = 'nested-container';

    let inputUser = document.createElement('input');
    inputUser.placeholder = 'Enter your name';
    inputUser.id = 'username' + event.id;
    inputUser.name = 'username' + event.id;

    let inputComment = document.createElement('input');
    inputComment.placeholder = 'Add your Comment';
    inputComment.id = 'comment' + event.id;
    inputComment.name = 'comment' + event.id;

    let postBtn = document.createElement('button');
    postBtn.innerHTML = 'Post';
    postBtn.id = event.id;
    postBtn.onclick = function () {
        postNestedComment(this);
    };

    divContainer.append(inputUser);
    divContainer.append(inputComment);
    divContainer.append(postBtn);

    document.getElementById(event.id).after(divContainer);
}

function postNestedComment(event) {
    console.log('postnestedcomments', event.id);
}

// if page loads from scratch
function fetchComments() {
	let localComments = localStorage.getItem("commentFeedObj");
	let localCommentID = localStorage.getItem("commentID");

	if (localComments) {
		buildFeed(JSON.parse(localComments));
		commentFeedObj = JSON.parse(localComments);
		commentID = localCommentID;
	}
}

function buildFeed(dataObj) {
	for (let item of dataObj) {
		addComment(item);
	}
}

function setLocalStorage() {
	localStorage.setItem("commentFeedObj", JSON.stringify(commentFeedObj));
	localStorage.setItem("commentID", commentID);
}
