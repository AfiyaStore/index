document.addEventListener("DOMContentLoaded", function () {
    // 🟢 অপশন নির্বাচন করা ও ব্যাখ্যা দেখানো
    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", function () {
            let parent = this.closest(".question-box");
            let options = parent.querySelectorAll(".option");
            let explanation = parent.querySelector(".explanation");

            // আগের সিলেকশন মুছতে হবে
            options.forEach(opt => opt.classList.remove("correct", "incorrect"));

            if (this.getAttribute("data-correct") === "true") {
                this.classList.add("correct");
                explanation.classList.remove("hidden");
            } else {
                this.classList.add("incorrect");
                explanation.classList.add("hidden");
            }
        });
    });

    // 🟢 👁️ আইকন - সব উত্তর + ব্যাখ্যা দেখানো/লুকানো
    const eyeIcon = document.querySelector(".floating-eye-icon");
    let eyeActive = false;

    eyeIcon.addEventListener("click", function () {
        eyeActive = !eyeActive;
        document.querySelectorAll(".question-box").forEach(box => {
            let correctOption = box.querySelector(".option[data-correct='true']");
            let explanation = box.querySelector(".explanation");

            if (eyeActive) {
                correctOption.classList.add("correct");
                explanation.classList.remove("hidden");
            } else {
                box.querySelectorAll(".option").forEach(opt => opt.classList.remove("correct"));
                explanation.classList.add("hidden");
            }
        });
    });

    // 🟢 রিপোর্ট সিস্টেম
    document.querySelectorAll(".report-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // যেন অন্য ক্লিক ইভেন্টে সমস্যা না হয়

            // আগের রিপোর্ট বক্স থাকলে সরিয়ে ফেলবে
            let existingPopup = document.querySelector(".report-popup");
            if (existingPopup) existingPopup.remove();

            let reportPopup = document.createElement("div");
            reportPopup.classList.add("report-popup");
            reportPopup.innerHTML = `
                <div class='report-box'>
                    <h3>রিপোর্ট করুন</h3>
                    <div class="report-options">
                        <label><input type="checkbox" value="incomplete"> অসম্পূর্ণ প্রশ্ন</label>
                        <label><input type="checkbox" value="wrong-answer"> ভুল উত্তর</label>
                        <label><input type="checkbox" value="wrong-category"> ভুল ক্যাটাগরি</label>
                        <label><input type="checkbox" value="incomplete-solution"> অসম্পূর্ণ সলিউশন</label>
                    </div>
                    <textarea placeholder='মন্তব্য লিখুন'></textarea>
                    <button class='submit-report'>সাবমিট</button>
                </div>
            `;
            document.body.appendChild(reportPopup);

            // বাইরে ক্লিক করলে রিপোর্ট বক্স বন্ধ হবে
            setTimeout(() => {
                document.addEventListener("click", function closePopup(event) {
                    if (!reportPopup.contains(event.target)) {
                        reportPopup.remove();
                        document.removeEventListener("click", closePopup);
                    }
                });
            }, 100);

            // সাবমিট করলে রিপোর্ট বক্স বন্ধ হবে
            document.querySelector(".submit-report").addEventListener("click", function () {
                alert("আপনার রিপোর্ট জমা হয়েছে!");
                reportPopup.remove();
            });
        });
    });

    // 🟢 রিভিউ সিস্টেম
    document.querySelectorAll(".review-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("reviewed");
        });
    });
});
