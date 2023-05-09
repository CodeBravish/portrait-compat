console.log(
    "%cPortrait Compat for Google Photos is running",
    "color: #c2c2c2; background-color: #101214; font-weight: 800; border-radius: 4px; padding: 4px 8px; margin: 4px 0"
)

var lastUrl = location.href

new MutationObserver(() => {
    const url = location.href
    if (url !== lastUrl) {
        lastUrl = url
        onUrlChange()
    }
}).observe(document, { subtree: true, childList: true })

function onUrlChange() {
    const adjacentButton = document.querySelector(".c9yG5b")
    const flipButtonEl = document.createElement("div")

    console.log(adjacentButton)

    adjacentButton.style.backgroundColor = "red"

    const flipButtonHTML = `
        <div>
            baksdjflkjwioejkjskjkvfooooobarrr
        </div>
    `

    flipButtonEl.innerHTML = flipButtonHTML
    setTimeout(() => {
        adjacentButton.insertAdjacentHTML("beforebegin", flipButtonEl)
    }, 5000)
}

const photoEl = document.querySelector("img[jsname='uLHQEd']")
var isFlipped = false

photoEl.addEventListener("click", () => {
    photoEl.style.transform = `scaleX(${isFlipped ? 1 : -1})`
    isFlipped = !isFlipped
})