//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const lines = document.querySelectorAll(".line");

    let currentIndex = 0;

    updateButtonState();

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateButtonState();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < circles.length - 1) {
            circles[currentIndex].classList.add("previous");
            currentIndex++;
            updateButtonState();
        }
    });

    function updateButtonState() {
        circles.forEach((circle, index) => {
            if (index === currentIndex) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }

			if(index < currentIndex)
			{
				circle.classList.add("previous");
			}
			else
			{
				circle.classList.remove("previous");
			}

			
        });

        lines.forEach((line, index) => {
            if (index < currentIndex) {
                line.classList.add("active");
            } else {
                line.classList.remove("active");
            }
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === circles.length - 1;
    }
});