const form = document.getElementById("form");
const travel = document.getElementById("Travel");
const result = document.getElementById("result");
const total = document.getElementById("total");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // البيانات الأساسية
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const messageField = document.getElementById("message").value.trim();

    // أول ميعاد
    const date1 = document.querySelectorAll(".date")[0].value;
    const time1 = document.querySelectorAll(".time")[0].value;

    // ميعاد الزيارة المتوقع
    const date2 = document.querySelectorAll(".date")[1].value;
    const time2 = document.querySelectorAll(".time")[1].value;

    // تحقق من البيانات
    if (!name || !email || !phoneNumber || !date1 || !time1) {

        result.style.color = "red";
        result.innerText = "من فضلك املي كل البيانات الأساسية!";

        return;
    }

    // تحقق من رقم الموبايل المصري
    const phoneRegex = /^01[0125][0-9]{8}$/;

    if (!phoneRegex.test(phoneNumber)) {

        result.style.color = "red";
        result.innerText = "من فضلك اكتب رقم موبايل مصري صحيح!";

        return;
    }

    // بيانات الرحلة
    const price = Number(travel.value.replace(/,/g, ""));
    const serviceText = travel.options[travel.selectedIndex].text;

    // عرض السعر
    total.innerText = `السعر التقريبي: ${price.toLocaleString()} جنيه`;

    // رسالة نجاح
    result.style.color = "red";
    result.innerText = "تم إرسال طلب الحجز بنجاح 🕋";

    // رسالة الواتساب
    const message = `🕋 طلب حجز جديد

👤 الاسم: ${name}

📞 رقم الهاتف:
${phoneNumber}

📧 الإيميل:
${email}

✈️ البرنامج:
${serviceText}

💰 السعر التقريبي:
${price.toLocaleString()} جنيه

📅 تاريخ التسجيل:
${date1}

⏰ الوقت:
${time1}

📅 موعد الزيارة المتوقع:
${date2 || "غير محدد"}

⏰ الوقت المتوقع:
${time2 || "غير محدد"}

📝 ملاحظات:
${messageField || "لا يوجد"}`;

    // رقم واتساب صاحب المكتب
    const phone = "201080407065";

    // إنشاء رابط الواتساب
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // فتح واتساب
    setTimeout(() => {

        window.open(url, "_blank");

    }, 1000);

});