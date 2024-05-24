
import React, { useState } from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    amount: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isIFrameVisible, setIsIFrameVisible] = useState(false);
  const [iframeSourceUrl, setIframeSourceUrl] = useState('');
//   const apiKey = 'YOUR_API_KEY';
//   const integrationId = 'YOUR_INTEGRATION_id';
  const apiKey = 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRJd016RTFMQ0p1WVcxbElqb2lhVzVwZEdsaGJDSjkuRVhZcDhZeUJKR1YwelFrbzVZM0dfV1lPOG82LUowNkYyYWx1TGFidTFYa2pYaWl4c2E5VThBNFliZEVIdUFiTGdKaVQzaF80QmUyVGZkbThhNHZCd1E=';
  const integrationId = '135990';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = await authenticate();
      const orderId = await createOrder(authToken);
      const paymentToken = await generatePaymentKey(authToken, orderId);
      const iframeSource = `https://pakistan.paymob.com/api/acceptance/iframes/148638?payment_token=${paymentToken}`;
      setIframeSourceUrl(iframeSource);
      setIsIFrameVisible(true);
      setSubmitted(true);
    } catch (error) {
      console.error('Payment process failed', error);
    }
  };

  const authenticate = async () => {
    const response = await axios.post('https://pakistan.paymob.com/api/auth/tokens', {
      api_key: apiKey,
    });
    return response.data.token;
  };

  const createOrder = async (authToken) => {
    const response = await axios.post('https://pakistan.paymob.com/api/ecommerce/orders', {
      auth_token: authToken,
      delivery_needed: false,
      amount_cents: formData.amount * 100,
      items: [],
    });
    return response.data.id;
  };

  const generatePaymentKey = async (authToken, orderId) => {
    const response = await axios.post('https://pakistan.paymob.com/api/acceptance/payment_keys', {
      auth_token: authToken,
      amount_cents: formData.amount * 100,
      expiration: 300,
      order_id: orderId,
      billing_data: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        apartment: 'NA',
        floor: 'NA',
        street: 'NA',
        building: 'NA',
        shipping_method: 'NA',
        postal_code: 'NA',
        city: 'NA',
        country: 'PK',
        state: 'NA',
      },
      currency: 'PKR',
      integration_id: integrationId,
      lock_order_when_paid: false,
    });
    return response.data.token;
  };

  return (
    <div className="container mx-auto p-8">
  {!submitted ? (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Submit
      </button>
    </form>
  ) : (
    isIFrameVisible && (
      <iframe
        src={iframeSourceUrl}
        className="w-full h-[760px]"
      ></iframe>
    )
  )}
</div>

  );
};

export default PaymentPage;
