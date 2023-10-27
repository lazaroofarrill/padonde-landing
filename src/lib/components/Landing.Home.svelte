<script lang="ts">
    import {Icon, Truck, Play, DocumentArrowDown} from 'svelte-hero-icons'
</script>

<div class="grid grid-cols-3 xs:grid-cols-1 flex-grow px-16 py-32">

    <!--    App download lead-->
    <div class="flex flex-col justify-between gap-16">
        <div class="text-primary font-semibold text-6xl leading-[1.25em]">Entrega <span class="text-accent">Veloz</span>
            y Fácil de <span
                    class="text-accent">Encontrar</span>
        </div>
        <div class="flex flex-row gap-4">
            <div>
                <!--                <div class="aspect-square bg-accent text-surface rounded-xl shadow-2xl w-16 inline-block border-2 border-primary">-->
                <!--                </div>-->
                <img src="/landing/face.png" alt="">
            </div>
            <div class="opacity-50 text-primary text-sm">
                Muy cansado para cocinar o desea pasar un rato agradable, somos
                la solución, a un click de distancia...
            </div>
        </div>
        <div class="flex flex-row justify-between h-16">
            <div class="flex flex-row items-center gap-3 bg-accent p-4 text-surface rounded-2xl shadow-3xl">
                <div class="inline-block w-8">
                    <Icon src="{DocumentArrowDown}"></Icon>
                </div>
                <div>Descargar App</div>
            </div>
            <div class="flex flex-row items-center gap-3">
                <div>
                    <div class="aspect-square w-16 p-4 shadow-3xl rounded-2xl bg-primary text-surface flex flex-row items-center justify-center relative">
                        <Icon src="{Play}" class="absolute w-8/12"></Icon>
                    </div>
                </div>
                <div>Como Usar!!</div>
            </div>
        </div>
    </div>

    <!--   Center Pics -->
    <div class="flex-grow p-4 flex flex-row items-center">
        <div class="relative aspect-square flex flex-row items-center justify-center">
            <svg class="absolute top-0 right-0 w-full aspect-square stroke-[3px] fill-none"
                 viewBox="0 0 100 100"
                 xmlns="http://www.w3.org/2000/svg"
                 stroke-linecap="round">
                <path d="
                M5,50
                A 45 45 0 0 1 20 16.5" class="stroke-accent"/>
                <path d="
                M65,7.5
                A 45 45 0 0 1 94.7 55" class="stroke-secondary"/>
                <path d="
                M15,78
                A 45 45 0 0 0 70 90" class="stroke-primary"/>
            </svg>
            <img src="/landing/icecream.png" alt="icecream" class="absolute w-32 top-[-100px] right-0">
            <img class="aspect-square w-3/4 relative" style="clip-path: circle(50%)" src="/landing/dish-bg.png"
                 alt="food dish">
            <img src="/landing/salad.png" alt="salad" class="absolute w-44 top-0 left-16 drop-shadow-2xl">
        </div>
    </div>

    <!--    Bullet Points-->
    <div class="flex flex-col justify-between">
        {#each {length: 3} as _, i}
            <div class="flex flex-row gap-4 items-center">
                <div>
                    <div class="p-4 shadow-3xl rounded-2xl inline-block aspect-square">
                        <Icon src="{Truck}" size="24"/>
                    </div>
                </div>
                <div>
                    <div class="font-bold">Entrega veloz</div>
                    <div class="opacity-50 text-sm">Solo está a minutos de degustar su comida...</div>
                </div>
            </div>
        {/each}
    </div>
</div>
