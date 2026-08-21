# Dodo Payments DevRel Take-Home Submission Pack

> **Author Note:** I regularly share technical demos and projects I build publicly on X (12k followers) and LinkedIn (12k followers), focusing on practical developer tooling and full-stack AI integrations. This launch plan leverages that existing reach alongside Dodo’s official channels to drive real developer adoption and creating more awareness about the insane features that dodo offers.

---

## Part 1 — The Explainer Video

* **Feature Selected:** Usage-Based / Metered Billing & Prepaid Credit Balances (`dodopayments` SDK)
* **Product Video Link:** [🎬 **Watch the Demo Video**](https://drive.google.com/file/d/1OszAYhdtfcAqotkxO5T4OmWe3W87z3cx/view?usp=sharing)

### Video Meta Note
* **Target Audience:** Full-stack and AI engineers building token-based SaaS/LLM apps who are losing margins on flat-rate $20/month subscriptions due to heavy power users.
* **Distribution Strategy:** Embedded at the top of the official Dodo Metered Billing API documentation, cross-posted across my personal X/LinkedIn channels (24k total audience), and linked at the top of the `dodo-roaster` GitHub repository README.

---

## Part 2 — The Feature-Launch Plan

### 1. Audience & Positioning
* **Primary Audience:** AI application developers, LLM wrapper creators, and API-first SaaS builders using Node.js/TypeScript.
* **Core Positioning:** *"Stop letting power users destroy your AI margins—meter LLM tokens in real time and enforce wallet top-ups in 15 lines of TypeScript."*

### 2. Channel Strategy

* **X / Twitter & LinkedIn (The Launch Moment & Creator Reach):**
  * **Play:** Direct, visual hook featuring a 30-second terminal GIF showing token depletion and circuit-breaker halting, followed by a 5-tweet technical thread.
  * **Personal Leverage:** Cross-post a raw, video-first breakdown on my LinkedIn (12k followers) and X (12k followers) detailing how I built `dodo-roaster` and why flat-rate pricing breaks LLM app margins.
  * **Amplification:** Tag key AI/dev tool builders (e.g., `@v0`, `@LangChainAI`, `@vercel`) highlighting how easily Dodo integrates with streaming LLM responses.

* **YouTube (Technical Deep-Dive):**
  * **Play:** An 8-minute implementation tutorial: *"Building a Pay-Per-Token AI App with Next.js & Dodo Payments."*
  * **Format:** Zero slides—pure live coding showing state machine execution and webhook handling.

* **Docs & Changelog (Day 0 Readiness):**
  * **Play:** Ship a copy-pasteable `/docs/metered-billing/quickstart` guide with interactive code snippets alongside a concise product changelog entry.

* **Community (Reddit, Hacker News, Dev.to, Discord):**
  * **Play:** Post an organic Show HN / Reddit thread (`r/node`, `r/NextJS`, `r/LocalLLaMA`): *"We got tired of custom SQL DBs for tracking token usage, so we built real-time SDK metering."*
  * **Anti-Pattern (What NOT to do):** No generic marketing blasts or cross-posting promotional banners in dev Discord servers. Focus entirely on architectural trade-offs.

* **Developer Email / Newsletter:**
  * **Play:** Dedicated product email to existing registered Dodo accounts leading with code snippets rather than promotional copy.

### 3. Launch-Week Timeline

| Day | Focus | Primary Assets & Actions |
| :--- | :--- | :--- |
| **Mon (Pre-Launch)** | **Infrastructure** | Deploy final SDK updates to npm (`dodopayments@latest`), publish API docs, and verify starter repo. |
| **Tue (Launch Day)** | **The Megaphone** | Post X launch thread, cross-post on LinkedIn (12k audience), send product changelog email, and submit "Show HN" text post. |
| **Wed (Tutorial)** | **Education** | Publish YouTube technical walkthrough; embed video directly into official documentation. |
| **Thu (Community)** | **Engagement** | Host a live 45-minute Discord Office Hours / Q&A: *"Architecting Metered Billing for LLMs."* |
| **Fri (Follow-Up)** | **Amplification** | Share developer implementation highlights on X/LinkedIn; ship a weekly roundup of community pull requests. |

### 4. Metrics & Developer Funnel

1. **Top-Funnel (Awareness):** 40,000+ total impressions across personal X/LinkedIn networks, official Dodo thread, YouTube views, and HN submission.
2. **Mid-Funnel (Consideration):** 1,500+ unique page views on `/docs/metered-billing/quickstart` & 150+ GitHub stars on `dodo-roaster`.
3. **Bottom-Funnel (Activation):** 50+ developer accounts executing at least one `dodo.usageEvents.create()` API call in `test_mode` within 7 days.

---

## Part 3 — Write the Launch Assets

### Asset 1: X / Twitter Launch Thread

**Tweet 1 (Hook):**
> Flat $20/mo subscriptions are killing AI startups. One power user running 50k tokens/day drains your OpenAI key before week two.
> 
> Today we’re launching Metered Billing for Dodo Payments.
> 
> Track LLM tokens in real time, set wallet limits, and auto-trigger checkout flows in 15 lines of code 👇

**Tweet 2 (The Problem):**
> Building token-based billing yourself usually means:
> ❌ Complex SQL aggregation tables
> ❌ Managing race conditions on user balances
> ❌ Handling regional VAT/GST on micro-payments
> 
> Dodo acts as your Merchant of Record (MoR) and handles the entire state machine natively.

**Tweet 3 (Code Example):**
> Here's how simple it is in TypeScript. 
> 
> Initialize the client and fire usage events directly alongside your LLM stream output. Dodo automatically deducts credit from the customer's balance:
> 
> ```typescript
> await dodo.usageEvents.ingest({
>  events: [
>    {
>      event_id: 'evt_' + Date.now(),
>      customer_id: 'cust_123',
>      event_name: 'llm_roast_tokens',
>      metadata: { tokens_used: '100' }
>    }
>  ]
>});
> ```

**Tweet 4 (Circuit Breaker):**
> What happens when the wallet runs dry?
> 
> Instead of crashing your server, Dodo's meter trips a balance alert so you can halt the stream and immediately return a pre-filled, hosted top-up link. No broken UI, zero manual DB syncs.

**Tweet 5 (CTA & Link):**
> Stop subsidizing your heaviest AI users. 
> 
> 📦 `npm i dodopayments`
> 💻 Starter repo: github.com/your-username/dodo-roaster
> 📚 Docs: dodopayments.com/docs/metered-billing

---

### Asset 2: YouTube Tutorial Script Outline

* **Title:** Build a Pay-Per-Token AI App in 8 Minutes (Dodo Payments + Node.js)
* **0:00 – 1:00 (The Hook):** Show an API bill spike graph. *"If your AI app uses flat pricing, power users are eating your profits. Today we're building a pay-per-token application with real-time billing."*
* **1:00 – 3:00 (Architecture):** Whiteboard walk-through explaining event-driven metering: LLM stream output $\rightarrow$ Dodo usage event $\rightarrow$ credit deduction $\rightarrow$ circuit-breaker top-up.
* **3:00 – 6:30 (Live Code Walkthrough):** Open VS Code. Step through installing `dodopayments`, setting up `dodo.usageEvents.create()`, and handling balance depletion gracefully.
* **6:30 – 8:00 (Outro & Call-to-Action):** Direct developers to clone the GitHub starter template and read the docs to integrate metered billing into their existing stack.

---

### Asset 3: Product Changelog & Release Note

**Subject Line:** [New Feature] Metered Billing & Real-Time Token Tracking for Dodo Payments

**Body:**
> You can now track usage events and bill users per token, API call, or compute second using the official Dodo Payments SDK. 
> 
> Initialize meters in your dashboard, dispatch events via `dodo.usageEvents.create()`, and enforce automatic low-balance checkout flows without writing custom database ledgers. Check out the [Metered Billing Quickstart Docs](https://dodopayments.com/docs/metered-billing) to get started.

---

## Part 4 — Community & Partnerships

### 4.1 Growing the Developer Community

1. **The "Ship & Get Reimbursed" Fund:**
   * **Play:** Offer $50 in OpenAI API credits to any developer who builds and deploys an open-source tool integrating Dodo Metered Billing within 30 days.
   * **Authenticity Focus:** Promotes real project creation over hollow Discord chatter.

2. **Weekly "Code & Coffee" Office Hours:**
   * **Play:** Host 45-minute live technical sessions on Discord every Thursday where I personally review developer PRs and debug integration blockers live on stream.

### 4.2 Partnerships & Co-Marketing

1. **Vercel AI SDK Middleware Integration:**
   * **Partner Type:** Open-source AI framework.
   * **Play:** Build a native `@dodopayments/ai-middleware` package that automatically meters tokens directly inside Vercel AI SDK stream wrappers.
   * **Metric for Success:** 100+ GitHub repos importing the middleware package within Q1.

2. **Next.js & SaaS Boilerplate Bundles (e.g., ShipFast / create-t3-app):**
   * **Partner Type:** Developer productivity tools & SaaS templates.
   * **Play:** Submit direct pull requests adding a pre-configured "Metered Billing / Pay-per-Token" template variant to popular SaaS starter kits.
   * **Metric for Success:** 25% conversion rate of template users activating Dodo test mode accounts.