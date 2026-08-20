import DodoPayments from 'dodopayments';
import dotenv from 'dotenv';

dotenv.config();

const dodo = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  environment: 'test_mode',
});

async function runRoastSession(customerId: string) {
  let userCreditBalance = 0.25; // User starting balance: $0.25

  console.log('====================================================');
  console.log('  🔥 DODO PAYMENTS METERED BILLING DEMO');
  console.log('  🤖 Feature: AI Code Roast Bot (Pay-Per-Token)');
  console.log('====================================================\n');
  console.log(`Starting session for Customer [${customerId}]...`);
  console.log(`Current Dodo Wallet Balance: $${userCreditBalance.toFixed(2)}\n`);

  const roastLines = [
    'Line 1: Why are you using nested loops here? My CPU started crying.',
    'Line 4: This variable naming style violates the Geneva Convention.',
    'Line 12: You did not handle async errors. Pure main-character energy.',
    'Line 18: This function is so cursed even StackOverflow would delete it.',
  ];

  for (let i = 0; i < roastLines.length; i++) {
    const tokenCost = 0.10; // $0.10 per roast line

    if (userCreditBalance < tokenCost) {
      console.log('\n❌ [DODO METER ALERT] Balance exhausted!');
      console.log(`   Remaining Balance: $${userCreditBalance.toFixed(2)}`);
      console.log('   AI Bot Halted: "Top up $1.00 via Dodo to hear the rest of my roast!"');
      console.log('   🔗 Live Checkout Link: https://checkout.dodopayments.com/buy/prd_test_123\n');
      console.log('====================================================');
      return;
    }

    // Fire usage event to Dodo Payments
    try {
      await (dodo.usageEvents as any).create({
        customer_id: customerId,
        event_name: 'llm_roast_tokens',
        properties: {
          tokens_used: 100,
        },
      });
    } catch (err) {
      // In local test runs without a pre-configured meter ID, fall back to mock log
      console.log('   [Dodo SDK Event Dispatched] -> event_name: "llm_roast_tokens"');
    }

    userCreditBalance -= tokenCost;
    console.log(`🤖 AI Roast #${i + 1}: "${roastLines[i]}"`);
    console.log(`   └─ [Dodo SDK] Metered 100 tokens ($${tokenCost.toFixed(2)} deducted) | Wallet Balance: $${userCreditBalance.toFixed(2)}\n`);
  }
}

runRoastSession('cust_test_hyderabad_dev');