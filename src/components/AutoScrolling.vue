<template>
    <div class="py-5 text-dark bg-light">
        <h3 class="text-center mb-5 text-capitalize ">we rely on the best to provide the finest service and experience
        </h3>
        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div v-for="(link, index) in links" :key="index"
                        class="d-flex flex-column justify-content-center align-items-center">
                        <img :src="link.image" style="width:60px;height:60px;object-fit: contain;" alt="">
                        <p class="text-center mb-0">{{ link.name }}</p>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div v-for="(link, index) in links" :key="index"
                        class="d-flex flex-column  justify-content-center align-items-center">
                        <img :src="link.image" style="width:60px;height:60px;object-fit: contain;" alt="">
                        <p class="text-center mb-0">{{ link.name }}</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "AutoScrolling",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            links: [
                {
                    id: 1,
                    name: 'Assembly',
                    image: '/img/categories/Assembly.svg'
                },
                {
                    id: 2,
                    name: 'Automobiles',
                    image: "/img/categories/Automobiles.svg"
                },
                {
                    id: 3,
                    name: 'Boostore',
                    image: "/img/categories/Boostore.svg"
                },
                {
                    id: 4,
                    name: 'Business',
                    image: "/img/categories/Business.svg"
                },
                {
                    id: 5,
                    name: 'Distribution',
                    image: "/img/categories/Distribution.svg"
                },
                {
                    id: 6,
                    name: 'Education',
                    image: "/img/categories/Education.svg"
                },
                {
                    id: 7,
                    name: 'Electronics',
                    image: "/img/categories/Electronics.svg"
                },
                {
                    id: 11,
                    name: 'FMCG',
                    image: "/img/categories/FMCG.svg"
                },
                {
                    id: 11,
                    name: 'Footwear',
                    image: "/img/categories/Footwear.svg"
                },
                {
                    id: 11,
                    name: 'Garments',
                    image: "/img/categories/Garments.svg"
                },
                {
                    id: 11,
                    name: 'Import n Export',
                    image: "/img/categories/Import n Export.svg"
                },
                {
                    id: 11,
                    name: 'Manufacturing',
                    image: "/img/categories/Manufacturing.svg"
                },
                {
                    id: 11,
                    name: 'Pharmaceuticals',
                    image: "/img/categories/Pharmaceuticals.svg"
                },
                {
                    id: 11,
                    name: 'Restraunts',
                    image: "/img/categories/Restraunts.svg"
                },
                {
                    id: 11,
                    name: 'Retail Shop',
                    image: "/img/categories/Retail Shop.svg"
                },
                {
                    id: 11,
                    name: 'Retail',
                    image: "/img/categories/Retail.svg"
                },
                {
                    id: 11,
                    name: 'Salon',
                    image: "/img/categories/Salon.svg"
                },
                {
                    id: 11,
                    name: 'Services',
                    image: "/img/categories/Services.svg"
                },
                {
                    id: 11,
                    name: 'Subscription',
                    image: "/img/categories/Subscription.svg"
                },
                {
                    id: 11,
                    name: 'Supermart',
                    image: "/img/categories/Supermart.svg"
                },
                {
                    id: 11,
                    name: 'Supply Chain',
                    image: "/img/categories/Supply Chain.svg"
                },
                {
                    id: 11,
                    name: 'Textiles',
                    image: "/img/categories/Textiles.svg"
                },
                {
                    id: 11,
                    name: 'Warehouse',
                    image: "/img/categories/Warehouse.svg"
                },
            ]
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style>
:root {
    --color-text: navy;
    --color-bg: papayawhip;
    --color-bg-accent: #ecdcc0;
    --size: clamp(10rem, 1rem + 40vmin, 30rem);
    --gap: calc(var(--size) / 14);
    --duration: 10s;
    --scroll-start: 0;
    --scroll-end: calc(-100% - var(--gap));
}

.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
    mask-image: linear-gradient(var(--mask-direction, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: var(--gap);
    min-width: 100%;
    animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
    .marquee__group {
        animation-play-state: paused;
    }
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(var(--scroll-start));
    }

    to {
        transform: translateX(var(--scroll-end));
    }
}

@keyframes scroll-y {
    from {
        transform: translateY(var(--scroll-start));
    }

    to {
        transform: translateY(var(--scroll-end));
    }
}

/* Parent wrapper */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin: auto;
    max-width: 100vw;
}

.wrapper--vertical {
    flex-direction: row;
    height: 100vh;
}

/* Toggle direction button */
.toggle {
    --size: 3rem;
    position: relative;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: var(--size);
    height: var(--size);
    font: inherit;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 50%;
    color: inherit;
    background-color: var(--color-bg-accent);
    z-index: 1;
}

.toggle:focus-visible {
    box-shadow: 0 0 0 2px var(--color-text);
}

.toggle span {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: calc(100% + 0.4em);
    width: fit-content;
    white-space: nowrap;
    transform: translateY(-50%);
    animation: fade 400ms 4s ease-out forwards;
    user-select: none;
}

@keyframes fade {
    to {
        opacity: 0;
        visibility: hidden;
    }
}
</style>