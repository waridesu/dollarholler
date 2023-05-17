<script lang="ts">
    import ThreeDots from "$lib/icon/ThreeDots.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import View from "$lib/icon/View.svelte";
    import type { Invoice } from "../../../global";
    import { centsToDollar, sumLineItems } from "$lib/utils/moneyHelper";
    import { formatDate, isLate } from "$lib/utils/datesHelpers";
    import { InvoiceStatus } from "../../../enums";
    import AdditionalOptions from "$lib/components/AdditionalOptions.svelte";
    import Edit from "$lib/icon/Edit.svelte";
    import Trash from "$lib/icon/Trash.svelte";
    import Send from "$lib/icon/Send.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import Button from "$lib/components/Button.svelte";
    import { deleteInvoice } from "$lib/stores/InvoiceStore";
    export let invoice: Invoice;
    let isAdditionalMenuShowing = false;
    let isOptionsDisabled = false;
    let isModalShowing = false;

    const handleEdit = () => {
        console.log('edit')
    }
    const handleDelete = () => {
        isModalShowing = true;
        isAdditionalMenuShowing = false;
    }
    const handleSentInvoice = () => {
        console.log('sent')
    }
    const getInvoiceLabel = (status: InvoiceStatus, date: string): string => {
        if (status === 'draft') {
            return 'draft'
        } else if (status === 'sent' && !isLate(date)) {
            isOptionsDisabled = true;
            return 'sent'
        } else if (status === 'sent' && isLate(date)) {
            isOptionsDisabled = true;
            return 'late'
        } else if (status === 'paid') {
            isOptionsDisabled = true;
            return 'paid'
        }
    }
</script>

<div class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow">
    <div class="status">
        <Tag className="ml-auto lg:ml-0" label={getInvoiceLabel(invoice.invoiceStatus, invoice.dueDate)}/>
    </div>
    <div class="text-sm lg:text-lg dueDate">{formatDate(invoice.dueDate)}</div>
    <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
    <div class="text-base lg:text-xl font-bold clientName whitespace-nowrap truncate">{invoice.client.name}</div>
    <div class="text-sm lg:text-lg font-mono font-bold amount text-right">${centsToDollar(sumLineItems(invoice.lineItems))}</div>
    <div class="text-sm lg:text-lg viewButton hidden lg:center">
        <a href="/" class="text-pastelPurple hover:text-daisyBush">
            <View/>
        </a>
    </div>
    <div class="text-lg moreButton hidden lg:center relative ">
        <button class="text-pastelPurple hover:text-daisyBush" on:click={() => isAdditionalMenuShowing = !isAdditionalMenuShowing}>
            <ThreeDots/>
        </button>
        {#if isAdditionalMenuShowing}
            <AdditionalOptions options="{[
                {label: 'Edit', icon: Edit, onClick: handleEdit, disabled: isOptionsDisabled},
                {label: 'Delete', icon: Trash, onClick: handleDelete, disabled: false},
                {label: 'Sent', icon: Send, onClick: handleSentInvoice, disabled: isOptionsDisabled},
            ]}"/>
        {/if}
    </div>
</div>

<Modal isVisible="{isModalShowing}" on:close={() => isModalShowing = false }>
    <div class="flex flex-col justify-between items-center gap-6 h-full min-h-[175px]">
        <div class="text-xl text-center font-bold text-daisyBush">Are you sure you want to delete this invoice to
            <span class="text-scarlet">{invoice.client.name}</span> for <span class="text-scarlet">${centsToDollar(sumLineItems(invoice.lineItems))}</span>?</div>
        <div class="flex gap-6">
            <Button isAnimated={false} label="Cancel" buttonStyle="secondary" onClick={() => {isModalShowing = false}} />
            <Button isAnimated={false} label="Yes, Delete It" buttonStyle="destructive" onClick={() => {
                deleteInvoice(invoice)
                isModalShowing = false
            }}/>
        </div>
    </div>
</Modal>

<style lang="postcss">
    .invoice-row {
        grid-template-areas: 'invoiceNumber invoiceNumber'
        'clientName amount'
        'dueDate status'
    }

    @media (min-width: 1024px) {
        .invoice-row {
            grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
        }
    }

    .invoice-row > .status {
        grid-area: status;
    }

    .invoice-row > .dueDate {
        grid-area: dueDate;
    }

    .invoice-row > .invoiceNumber {
        grid-area: invoiceNumber;
    }

    .invoice-row > .clientName {
        grid-area: clientName;
    }

    .invoice-row > .amount {
        grid-area: amount;
    }

    .invoice-row > .viewButton {
        grid-area: viewButton;
    }

    .invoice-row > .moreButton {
        grid-area: moreButton;
    }

</style>