<svelte:options customElement="my-element" />

<script lang="ts">
    export let label: string;
    export let isActive: boolean;
    export let toggle: () => void;

    let hover = false;
</script>

<my-button
    class="inline-flex justify-center content-center m-2.5 pl-8 pr-8 pt-2 pb-2
     border-5 border-aroace-yellow rounded-lg bg-aroace-light-blue
    transition-[width, height] duration-500 ease-in-out hover:scale-110"
    role="button"
    tabindex="-1"
    onclick={toggle}
    onkeydown={toggle}
    onmouseover={() => (hover = true)}
    onfocus={() => (hover = true)}
    onmouseout={() => (hover = false)}
    onblur={() => (hover = false)}
    style:background-color={isActive || hover ? "#9fcce7" : "#5faad7"}
>
    <div
        class="inline-flex justify-evenly content-start text-aroace-dark-blue font-[VerilySerif] xs text-center"
    >
        {label}
    </div>
</my-button>
