'use strict';
/**
 * TypeScript
 */
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpublished"] = 0] = "Unpublished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: 'One Day',
    // content: '🛵 🌅 🏖 🍹 ⛰ 🌄',
    status: PostStatus.Unpublished,
};
console.log(post);
console.log(PostStatus[0]);
