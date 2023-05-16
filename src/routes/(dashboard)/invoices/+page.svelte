<script>
    import {invoices, loadInvoices} from "$lib/stores/InvoiceStore";
    import {onMount} from "svelte";
    import Search from "../../../lib/components/Search.svelte";
    import CircledAmount from "../../../lib/components/CircledAmount.svelte";
    import InvoiceRow from "./InvoiceRow.svelte";
    import {sumInvoices, centsToDollar} from "$lib/utils/moneyHelper";
    import BlankState from "./BlankState.svelte";
    import InvoiceRowHeader from "./InvoiceRowHeader.svelte";
    import Portal from "$lib/components/Portal.svelte";

    onMount(() => {
        loadInvoices();
        console.log($invoices)
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
        <button
                class="relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo px-5 py-2 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:px-10 lg:py-3 lg:text-xl">
            + Invoice
        </button>
    </div>
</div>
<div>
    <Portal>
        <div>Invoice Form</div>
    </Portal>
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



