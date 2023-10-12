<script>
  PUBLIC_STRIPE_KEY = "pk_live_6nE4LbMc80WJmAD3PoVohLvM00KdBRzc1N";
  SECRET_STRIPE_KEY =
    "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";
  SECRET_STRIPE_WEBHOOK_KEY =
    "whsec_cef8885af62421d37b006dd4f37a3e754f3935af5cca50b0976a40093b9e8f44";
  DOMAIN = "http://localhost:5000";

  import { onMount } from "svelte";
  import { loadStripe } from "@stripe/stripe-js";
  import { Elements, PaymentElement } from "svelte-stripe";

  // export let data;

  let stripe;
  let elements;

  onMount(async () => {
    stripe = await loadStripe(PUBLIC_STRIPE_KEY);
  });

  async function submit() {
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    });

    if (error) {
      console.error(error);
    }
  }
</script>

<h1>Payment</h1>

{#if stripe}
  <form on:submit|preventDefault={submit}>
    <Elements {stripe} {clientSecret} bind:elements>
      <PaymentElement />
    </Elements>
    <button>Pay</button>
  </form>
{:else}
  Loading Stripe...
{/if}
