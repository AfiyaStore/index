// সেকশন দেখানো ও লুকানোর জন্য ফাংশন
function showBox(id) {
    document.querySelectorAll('.big-box').forEach(box => box.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// সার্চ ফাংশন
function searchBox() {
    let query = document.getElementById('search').value.toLowerCase();
    document.querySelectorAll('.subject-box').forEach(box => {
        box.style.display = box.innerText.toLowerCase().includes(query) ? 'block' : 'none';
    });
}

// বক্স সক্রিয় বা নিষ্ক্রিয় করার ফাংশন (রঙ পরিবর্তন)
function toggleActive(el) {
    el.classList.toggle('active');
}

// নতুন পেজ লোড করার জন্য ফাংশন
function openPage(subject) {
    alert(subject + ' পৃষ্ঠায় যাচ্ছে...');
}

// বিষয় বা প্রতিষ্ঠান সিলেক্ট করলে বাকিগুলো লুকিয়ে যাবে
document.querySelectorAll('.menu div').forEach(menuItem => {
    menuItem.addEventListener('click', function() {
        document.querySelectorAll('.menu div').forEach(item => item.style.background = "#FFC107");
        this.style.background = "#FF9800"; // অ্যাক্টিভ রঙ পরিবর্তন
    });
});

// বিষয়ভিত্তিক বা প্রতিষ্ঠান ভিত্তিক ক্লিক করলে অ্যানিমেশন ইফেক্ট
document.querySelectorAll('.subject-box').forEach(subject => {
    subject.addEventListener('click', function() {
        document.querySelectorAll('.subject-box').forEach(box => box.style.opacity = "0.5");
        this.style.opacity = "1";
    });
});
