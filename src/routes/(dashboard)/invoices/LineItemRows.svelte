<script lang="ts">
    import { createEventDispatcher } from "svelte";
  import LineItemRow from "./LineItemRow.svelte";
  import type { LineItem } from "../../../global";
  import Button from "$lib/components/Button.svelte";
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  export let lineItems: LineItem[] | undefined = undefined;
  let dispatch = createEventDispatcher();
</script>
<div class="invoice-line-item border-b-2 border-daisyBush pb-2">
    <div class="table-header">Description</div>
    <div class="table-header text-right">Unit Price</div>
    <div class="table-header text-center">Quantity</div>
    <div class="table-header text-right">Amount</div>
</div>

{#if lineItems}
    {#each lineItems as lineItem, index }
        <LineItemRow {lineItem} on:removeLineItem={() => {dispatch('removeLineItem', lineItem.id)}} canDelete={index > 0}/>
    {/each}
{/if}

<div class="invoice-line-item">
    <div class="col-span-2">
        <Button 
            isAnimated={false}
            label="+ Line item" 
            buttonStyle="text-only" 
            onClick={() => {dispatch('addLineItem')}}
            iconLeft={null}
            iconRight={null}/>
    </div>
    <div class="font-bold py-5 text-right text-monsoon">
        Subtotal
    </div>
    <div class="py-5 font-bold text-right font-mono">$250.00</div>
</div>

<div class="invoice-line-item">
    <div class="col-span-2 font-bold py-5 text-right text-monsoon">
        Discount
    </div>
    <div class="relative">
        <input class="line-item h-10 w-full border-b-2 border-dashed border-stone-300
         pr-4 text-right focus:border-solid focus:border-lavenderIndigo focus:outline-none"
         type="number" name="discount" min="0" max="100">
         <span class="absolute text-mono right-0 top-2">%</span>
    </div>
    <div class="py-5 text-right text-mono">$10.00 </div>
</div>
<div class="invoice-line-item">
    <div class="col-span-6">
        <CircledAmount label="Total:" amount="250" />
    </div>
</div>

<style lang="postcss">
    .table-header {
        @apply text-sm font-bold text-daisyBush;
    }
</style>