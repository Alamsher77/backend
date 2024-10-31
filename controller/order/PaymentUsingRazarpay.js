import Razorpay from "razorpay"

// Load your Razorpay key and secret from environment variables
const razorpay = new Razorpay({
  key_id: process.env.RAZARPAY_TEST_ID,
  key_secret: process.env.RAZARPAY_SECRATE_KEY,
});

// Endpoint to create an order
const razerpayment = async (req, res) => {
  const { amount, currency = "INR" } = req.body;
  const options = {
    amount: amount * 100, // Amount is in smallest unit (paise for INR)
    currency,
    receipt: `receipt_${Date.now()}`,
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed", error });
  }
}

// Endpoint to verify payment
const razerpayment = async (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const hash = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  if (hash === signature) {
    res.json({ status: "success" });
  } else {
    res.status(400).json({ status: "failure" });
  }
}

