console.log("SCRIPT STYARTED EVERYONE LOOK AT MEEE");

var lastUrl = location.href

new MutationObserver(() => {
    const url = location.href
    if (url !== lastUrl) {
        lastUrl = url
        onUrlChange()
    }
}).observe(document, { subtree: true, childList: true })

function toggleCommentSection() {
    commentSection.style.display =
        commentSection.style.display == "none !important" ? "block" : "none"
}

function onUrlChange() {
    const commentSection = document.querySelector(
        ".tiktok-3q30id-DivContentContainer"
    )

}


