<script lang="ts">
    import { v4 as uuid } from 'uuid';
    import Button from "$lib/components/Button.svelte";
    import Trash from "$lib/icon/Trash.svelte";
    import LineItemRows from "./LineItemRows.svelte";
    import type { LineItem } from "../../../global";
    const blankItem: LineItem = {
            id: uuid(),
            description: '',
            quantity: 0,
            amount: 0,
        }
    let lineItems: LineItem[] = [{...blankItem}];
    const addLineItem = () => {
        
        lineItems = [...lineItems, { ...blankItem, id: uuid() } ];
    };
    const removeLineItem = (event: CustomEvent) => {        
        lineItems = lineItems.filter(item => item.id !== event.detail);
    };
</script>

<h2>Add an Invoice</h2>

<form class="grid grid-cols-6 gap-x-5">
    <div class="field col-span-2">
        <label for="client">Client</label>
        <select name="client" id="client">
            <option value="zeal">ZEAL</option>
            <option value="zeal">ZEAL</option>
            <option value="zeal">ZEAL</option>
        </select>
    </div>

    <div class="field col-span-2 flex items-end gap-x-5">
        <div class="text-base font-bold leading-[3.5rem] text-monsoon">or</div>
        <Button label="+ Client" buttonStyle="outline" onClick={() => {''}} isAnimated={false}/>
    </div>

    <div class="field col-span-2">
        <label for='id'>Invoice ID</label>
        <input type="number" name="id" id="id"/>
    </div>

    <div class="field col-span-2">
        <label for="dueDate">Due Date</label>
        <input type="date" name="dueDate" id="dueDate"/>
    </div>

    <div class="field col-span-2 col-start-5">
        <label for="issueDate">Issue Date</label>
        <input type="date" name="issueDate" id="issueDate"/>
    </div>

    <div class="field col-span-6">
        <label for="subject">Subject</label>
        <input type="text" name="subject" id="subject"/>
    </div>
    <div class="field col-span-6">
        <LineItemRows lineItems="{lineItems}" on:addLineItem={addLineItem} on:removeLineItem={removeLineItem}/>
    </div>

    <div class="field col-span-6">
        <label for="notes">Notes <span class="font-normal">(optional, displayed on invoice)</span></label>
        <textarea name="notes" id="notes"></textarea>
    </div>

    <div class="field col-span-6">
        <label for="terms">Terms
            <span class="font-normal">(optional, enter your terms and conditions)</span>
        </label>
        <textarea name="terms" id="terms"></textarea>
        <div class="text-xs text-gray-400">
            Formatting tips: <strong>*bold*</strong>, <em>_italics_</em>.
        </div>
    </div>

    <div class="field col-span-2">
        <Button
                label="Delete"
                buttonStyle="text-only-destructive"
                isAnimated={false}
                onClick={() => {''}}
                iconLeft={Trash}/>
    </div>
    <div class="field col-span-4 flex justify-end gap-x-5">
        <Button label="Cancel" buttonStyle="secondary" isAnimated={false} onClick={() => {''}}/>
        <Button label="Save" onClick={() => {''}}/>
    </div>
</form>