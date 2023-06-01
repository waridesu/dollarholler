<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Trash from "$lib/icon/Trash.svelte";
  import type { LineItem } from "../../../global";
  import { twoDecimals, dollarsToCent } from "$lib/utils/moneyHelper";

  export let lineItem: LineItem;
  export let canDelete: boolean = false;
  let dispatch = createEventDispatcher();
  let unitPrice = twoDecimals(lineItem.amount / lineItem.quantity);
  let amount = twoDecimals(lineItem.amount);

  $: {
    amount = twoDecimals(lineItem.quantity * Number(unitPrice));
    lineItem.amount = dollarsToCent(Number(amount));
  }
</script>

<div class="invoice-line-item border-b-2 border-fog py-2">
    <div>
        <input class="line-item" type="text" name="description" bind:value={lineItem.description}>
    </div>
    <div>
        <input class="line-item text-right" type="number" name="unitPrice" bind:value={unitPrice} on:blur={()=> {unitPrice = twoDecimals(Number(unitPrice))}} step="0.01" min="0">
    </div>
    <div>
        <input class="line-item text-center" bind:value={lineItem.quantity} type="number" name="quantity" min="0">
    </div>
    <div>
        <input class="line-item text-right" type="number" name="amount" step="0.01" min="0" bind:value={amount} disabled>
    </div>
    <div>
        {#if canDelete}
            <button on:click|preventDefault  ={() => {
                dispatch('removeLineItem')
            }} class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo">
                <Trash/>
            </button>
        {/if}
    </div>
</div>

<style lang="postcss">
    input[type="text"],
    input[type="number"] {
        @apply h-10 w-full border-b-2 border-dashed border-stone-300;
    }

    input[type="text"] {
        @apply font-sansSerif text-xl font-bold;
    }

    input[type="number"] {
        @apply font-mono text-base;
    }

    input[type="text"]:focus,
    input[type="number"]:focus {
        @apply border-solid border-lavenderIndigo outline-none;
    }

    input[type="text"]:disabled,
    input[type="number"]:disabled {
        @apply border-b-0 bg-transparent px-0;
    }
</style>