# EmailJS Template Example

When setting up your template in the EmailJS dashboard, you can use this HTML as a starting point:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            border-radius: 5px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        h1 {
            color: #0066cc;
            margin: 0;
            padding: 0;
        }
        .section {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .value {
            margin-bottom: 15px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="section">
            <div class="label">Name:</div>
            <div class="value">{{name}}</div>
            
            <div class="label">Email:</div>
            <div class="value">{{email}}</div>
            
            <div class="label">Phone:</div>
            <div class="value">{{phone}}</div>
        </div>
        
        <div class="section">
            <div class="label">Service Required:</div>
            <div class="value">{{service_type_label}}</div>
            
            <div class="label">Property Type:</div>
            <div class="value">{{property_type_label}}</div>
            
            <div class="label">Location:</div>
            <div class="value">{{location}}</div>
        </div>
        
        <div class="section">
            <div class="label">Message:</div>
            <div class="value">{{message}}</div>
        </div>
        
        <div class="footer">
            This email was sent from the Dodawn Computronix website contact form.
        </div>
    </div>
</body>
</html>
```

## Template Variables

Make sure to include these variables in your EmailJS template:

- `{{name}}` - The customer's full name
- `{{email}}` - The customer's email address
- `{{phone}}` - The customer's phone number
- `{{service_type_label}}` - Type of service requested (Solar Installation, CCTV Installation, etc.)
- `{{property_type_label}}` - Type of property (Residential, Commercial, Industrial)
- `{{location}}` - The customer's location
- `{{message}}` - The customer's detailed message

These variables will be automatically populated from the form data when a submission is made.
