<?php
/**
 * ============================================================
 * PHP Backend لإرسال رسائل نموذج التواصل عبر البريد الإلكتروني
 * جميع الحقوق محفوظة © 2025 Web Code
 * ============================================================
 */

// ─── إعدادات CORS ───────────────────────────────────────────
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// ─── معالجة طلب OPTIONS (preflight) ─────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ─── التأكد من أن الطلب POST ───────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => '❌ الطريقة غير مسموحة. يجب استخدام POST.'
    ]);
    exit;
}

// ─── إعدادات البريد الإلكتروني ──────────────────────────────
$to_email   = 'wepcob1@gmail.com';          // البريد المستلم
$site_name  = 'Web Code - Yousef Alsheikh';  // اسم الموقع
$from_email = 'noreply@webcode.com';          // البريد المرسل (يُفضل استبداله ببريد حقيقي من السيرفر)

// ─── الحصول على بيانات النموذج ──────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);

// إذا لم يكن JSON صالحاً، نقرأ من $_POST
if (!$input) {
    $input = $_POST;
}

// ─── التحقق من حقل honeypot (مكافحة السبام) ─────────────────
if (!empty($input['website']) || !empty($_POST['website'])) {
    // روبوت! نرسل رد نجاح مزيف عشان نخدع البوت
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '✅ تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت.'
    ]);
    exit;
}

// ─── استخراج البيانات وتعقيمها ──────────────────────────────
$name    = isset($input['name'])    ? sanitize_input($input['name'])    : '';
$email   = isset($input['email'])   ? sanitize_input($input['email'])   : '';
$subject = isset($input['subject']) ? sanitize_input($input['subject']) : 'بدون موضوع';
$message = isset($input['message']) ? sanitize_input($input['message']) : '';

// ─── التحقق من صحة البيانات ─────────────────────────────────
$errors = [];

if (empty($name)) {
    $errors[] = 'الاسم مطلوب';
}

if (empty($email)) {
    $errors[] = 'البريد الإلكتروني مطلوب';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'البريد الإلكتروني غير صالح';
}

if (empty($message)) {
    $errors[] = 'الرسالة مطلوبة';
}

if (strlen($message) < 10) {
    $errors[] = 'الرسالة قصيرة جداً (يجب أن تكون 10 أحرف على الأقل)';
}

if (strlen($message) > 5000) {
    $errors[] = 'الرسالة طويلة جداً (الحد الأقصى 5000 حرف)';
}

// ─── إذا كان هناك أخطاء ─────────────────────────────────────
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => '❌ يرجى تصحيح الأخطاء التالية:',
        'errors'  => $errors
    ]);
    exit;
}

// ─── بناء عنوان البريد (Subject) ────────────────────────────
$email_subject = '📩 رسالة جديدة من موقعك - ' . $site_name;
if (!empty($subject) && $subject !== 'بدون موضوع') {
    $email_subject .= ' | ' . $subject;
}

// ─── بناء محتوى البريد الإلكتروني (HTML) ────────────────────
$email_body = "
<!DOCTYPE html>
<html dir='rtl' lang='ar'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>رسالة جديدة من الموقع</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            background: #f4f4f8;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }
        .email-header {
            background: linear-gradient(135deg, #6c63ff, #f72585);
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            color: #ffffff;
            font-size: 24px;
            margin: 0;
        }
        .email-header p {
            color: rgba(255,255,255,0.8);
            margin: 8px 0 0;
            font-size: 14px;
        }
        .email-body {
            padding: 30px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px 20px;
            background: #f8f9fe;
            border-radius: 12px;
            border-right: 4px solid #6c63ff;
        }
        .field-label {
            font-size: 12px;
            color: #6c63ff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 6px;
        }
        .field-value {
            font-size: 16px;
            color: #333;
            line-height: 1.6;
        }
        .field-value a {
            color: #6c63ff;
            text-decoration: none;
        }
        .email-footer {
            padding: 20px 30px;
            background: #f8f9fe;
            text-align: center;
            font-size: 13px;
            color: #888;
            border-top: 1px solid #eee;
        }
        .email-footer a {
            color: #6c63ff;
            text-decoration: none;
        }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            background: rgba(108,99,255,0.1);
            color: #6c63ff;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <h1>📩 رسالة جديدة</h1>
            <p>من نموذج التواصل في موقعك الشخصي</p>
        </div>
        <div class='email-body'>
            <div style='text-align: center; margin-bottom: 25px;'>
                <span class='badge'>" . htmlspecialchars($site_name) . "</span>
            </div>

            <div class='field'>
                <div class='field-label'>👤 الاسم</div>
                <div class='field-value'>" . htmlspecialchars($name) . "</div>
            </div>

            <div class='field'>
                <div class='field-label'>📧 البريد الإلكتروني</div>
                <div class='field-value'>
                    <a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a>
                </div>
            </div>

            <div class='field'>
                <div class='field-label'>📌 الموضوع</div>
                <div class='field-value'>" . htmlspecialchars($subject) . "</div>
            </div>

            <div class='field'>
                <div class='field-label'>💬 الرسالة</div>
                <div class='field-value' style='white-space: pre-wrap;'>" . htmlspecialchars($message) . "</div>
            </div>
        </div>
        <div class='email-footer'>
            <p>🕐 تم الإرسال: " . date('Y-m-d H:i:s') . "</p>
            <p>📧 البريد الإلكتروني للمرسل: <a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></p>
            <p style='margin-top: 15px;'>
                <a href='mailto:" . htmlspecialchars($email) . "?subject=رد على رسالتك - " . htmlspecialchars($subject) . "' 
                   style='display: inline-block; padding: 10px 24px; background: #6c63ff; color: white; border-radius: 50px; text-decoration: none; font-weight: 600;'>
                    📨 الرد على هذه الرسالة
                </a>
            </p>
        </div>
    </div>
</body>
</html>
";

// ─── بناء Headers للبريد الإلكتروني ─────────────────────────
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $site_name . " <" . $from_email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1 (Highest)\r\n";
$headers .= "Importance: High\r\n";

// ─── محاولة إرسال البريد ────────────────────────────────────
$mail_sent = @mail($to_email, $email_subject, $email_body, $headers);

// ─── الرد على العميل ────────────────────────────────────────
if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => '✅ تم إرسال رسالتك بنجاح! سأرد عليك في أقرب وقت ممكن. شكراً لتواصلك 🙏'
    ]);
} else {
    // تسجيل الخطأ (اختياري)
    error_log('فشل إرسال البريد الإلكتروني من نموذج التواصل: ' . date('Y-m-d H:i:s'));

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => '❌ عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.'
    ]);
}

// ─── دالة تعقيم المدخلات ────────────────────────────────────
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}
