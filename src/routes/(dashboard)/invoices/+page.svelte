<script lang="ts">
    import { invoices, loadInvoices } from "$lib/stores/InvoiceStore";
    import { onMount } from "svelte";
    import Search from "../../../lib/components/Search.svelte";
    import CircledAmount from "../../../lib/components/CircledAmount.svelte";
    import InvoiceRow from "./InvoiceRow.svelte";
    import { sumInvoices, centsToDollar } from "$lib/utils/moneyHelper";
    import BlankState from "./BlankState.svelte";
    import InvoiceRowHeader from "./InvoiceRowHeader.svelte";
    import Button from "$lib/components/Button.svelte";
    import SlidePanel from "$lib/components/SlidePanel.svelte";
    import InvoceForm from "./InvoceForm.svelte";

    let isInvoiceFormShowing = false;

    onMount(() => {
        loadInvoices();
    });
</script>

<svelte:head>
    <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div class="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-7 lg:mb-16 md:gap-7-4">
    {#if $invoices.length > 0}
        <Search/>
    {:else}
        <div></div>
    {/if}
    <div>
        <Button label="+ Invoice" onClick={() => { isInvoiceFormShowing =  true}}/>
    </div>
</div>
<div>

    {#if $invoices === null}
        Loading...
    {:else if ($invoices.length <= 0)}
        <BlankState/>
    {:else}
        <InvoiceRowHeader className="text-daisyBush"/>

        <div class="flex flex-col-reverse">
            {#each $invoices as invoice}
                <InvoiceRow {invoice}/>
            {/each}
        </div>

        <CircledAmount label="Total" amount={`$${centsToDollar(sumInvoices($invoices))}`}/>
    {/if}
</div>
{#if isInvoiceFormShowing}
    <SlidePanel on:closePanel={() => {isInvoiceFormShowing = false}}>
        <InvoceForm/>
    </SlidePanel>
{/if}
