# bKash Integration Setup Guide

This guide will help you set up bKash payment integration in your Next.js application.

## Environment Variables

Add the following environment variables to your `.env` file:

```env
# bKash Configuration
BK_USERNAME=your_bkash_username
BK_PASSWORD=your_bkash_password
BK_APP_KEY=your_bkash_app_key
BK_APP_SECRET=your_bkash_app_secret

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/your-database
MONGODB_DB_NAME=your-database-name

# Frontend URL
NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:3000

# Facebook Conversion API (Optional)
FB_ACCESS_TOKEN=your_facebook_access_token
FB_PIXEL_ID=your_facebook_pixel_id

# Email Configuration (Optional)
EMAIL_SERVICE=resend # or sendgrid
RESEND_API_KEY=your_resend_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com
```

## Database Setup

The integration uses MongoDB to store payment records. Make sure you have MongoDB running and update the `MONGODB_URI` and `MONGODB_DB_NAME` environment variables.

## Usage

### 1. Basic Checkout Component

```tsx
import { BkashCheckout } from "@/components/bkash-checkout";

export default function CheckoutPage() {
  const customerInfo = {
    name: "John Doe",
    email: "john@example.com",
    phone: "01712345678",
    address: "123 Street, Dhaka",
  };

  return (
    <BkashCheckout
      amount={100}
      customerInfo={customerInfo}
      onSuccess={() => console.log("Payment initiated")}
      onError={(error) => console.error("Payment error:", error)}
    />
  );
}
```

### 2. Custom Integration with Hook

```tsx
import { useBkash } from "@/hooks/use-bkash";

export function CustomPaymentButton() {
  const { createPayment, isLoading, error } = useBkash();

  const handlePayment = async () => {
    try {
      await createPayment({
        amount: 100,
        callbackURL: `${window.location.origin}/api/bkash/callback`,
        customerInfo: {
          name: "John Doe",
          email: "john@example.com",
          phone: "01712345678",
        },
      });
    } catch (err) {
      console.error("Payment failed:", err);
    }
  };

  return (
    <button onClick={handlePayment} disabled={isLoading}>
      {isLoading ? "Processing..." : "Pay with bKash"}
    </button>
  );
}
```

## API Endpoints

### Create Payment

- **URL**: `/api/bkash/create`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "amount": 100,
    "callbackURL": "https://yourdomain.com/api/bkash/callback",
    "payerReference": "optional-reference",
    "customerInfo": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "01712345678",
      "address": "123 Street, Dhaka"
    }
  }
  ```

### bKash Callback

- **URL**: `/api/bkash/callback`
- **Method**: `GET`
- **Query Parameters**: `paymentID`, `status`, `signature`, `apiVersion`

### Facebook Conversion

- **URL**: `/api/fb-conversion`
- **Method**: `POST`
- **Body**: Facebook conversion event data

## Payment Flow

1. User initiates payment through the checkout component
2. System creates a bKash payment and redirects to bKash gateway
3. User completes payment on bKash
4. bKash redirects back to the callback URL
5. System executes the payment and updates the database
6. User is redirected to success/failure page
7. Confirmation email is sent (if configured)
8. Facebook conversion event is tracked (if configured)

## Success/Failure Pages

Create the following pages for handling payment results:

- `/payment-success` - Displayed when payment is successful
- `/payment-fail` - Displayed when payment fails

## Error Handling

The system includes comprehensive error handling:

- bKash API errors are logged and returned to the client
- Database errors are caught and logged
- Email sending failures don't block the payment flow
- Facebook conversion errors are logged but don't affect payment

## Security Notes

- Never expose bKash credentials on the client side
- Always validate payment status on the server side
- Use HTTPS for all payment-related endpoints
- Implement proper authentication for payment initiation

## Testing

For testing in development:

1. Use bKash sandbox credentials
2. Set `NODE_ENV=development` to log emails instead of sending
3. Use test event codes for Facebook conversions

## Support

If you encounter any issues:

1. Check the server logs for detailed error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is accessible
4. Test bKash credentials separately
