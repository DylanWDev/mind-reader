const mindReader = {
    currentState: 0, // Track the current view state
    views: [
        "Welcome to Mind Reader",
        "View 2 Content",
        "View 3 Content",
        "View 4 Content",
        "View 5 Content (Symbol)"
    ],
    init: function () {
        // Add event listeners to buttons
        const prevButton = document.getElementById("prevButton");
        const nextButton = document.getElementById("nextButton");
        const resetButton = document.getElementById("resetButton");

        prevButton.addEventListener("click", () => this.moveToPreviousView());
        nextButton.addEventListener("click", () => this.moveToNextView());
        resetButton.addEventListener("click", () => this.resetToFirstView());

        // Display the initial view
        this.displayCurrentView();
    },
    moveToNextView: function () {
        if (this.currentState < this.views.length - 1) {
            this.currentState++;
            this.displayCurrentView();
        }
    },
    moveToPreviousView: function () {
        if (this.currentState > 0) {
            this.currentState--;
            this.displayCurrentView();
        }
    },
    resetToFirstView: function () {
        this.currentState = 0;
        this.displayCurrentView();
    },
    displayCurrentView: function () {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<h1>${this.views[this.currentState]}</h1>`;
    },
};

// Initialize the app when the page loads
window.addEventListener("load", () => {
    mindReader.init();
});