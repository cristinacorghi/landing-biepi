<template>
    <div class="bg-black px-[24px]">
        <div class="relative mx-auto flex justify-center py-5 md:pt-[70px]">
            <img class="w-24 h-auto md:w-48" src="~/assets/img/Biepi-logo-negativo.svg" alt="Biepi logo negativo">
        </div>
        <p ref="presents" class="font-regular text-white pb-5 text-center uppercase tracking-widest text-[16px]">presents</p>
        <h1 ref="title" class="pt-10 text-white z-0 relative leading-[45px] uppercase tracking-widest font-regular text-center text-[48px] md:leading-[65px] md:text-[80px] md:font-extralight">the <span class="text-gold">origin</span> of coffee</h1>
        <div ref="imageOrigin" class="pb-10 z-1 relative flex justify-center md:mt-3">
            <img src="~/assets/img/origin.png" alt="Origin">
        </div>

        <div ref="video" class="py-10">
            <iframe class="w-full h-full" src="https://player.vimeo.com/video/636330319?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="BIEPI - Origin"></iframe>
        </div>

        <div class="container max-w-[1500px] md:grid md:grid-cols-2 md:mx-auto lg:px-6">
            <div class="sticked container mx-auto py-10 p-4 gap-5 md:gap-x-10 md:order-2 md:my-15 lg:gap-x-16">
                <div class="sticked mb-14 md:mb-auto md:sticky md:w-96 md:max-w-full md:mx-auto xl:w-[600px]">
                    <p ref="textBiepi" class="mt-6 text-white font-regular lg:text-2xl">
                        <span class="font-bold">BIEPI Origin</span> blends elements of the <span class="font-bold">industrial</span> and <span class="font-bold">design</span> worlds, representing the maximum expression of our new aesthetic language: a <span class="font-bold">mix of emotion</span> and <span class="font-bold">elegance</span>, natural materials alternating with black and stainless steel surfaces.<br><br>
                        Designed by <a class="underline" href="http://www.whynot-design.com/wp/" rel="noopener" target="_blank">Whynot</a>, BIEPI Origin is a <span class="font-bold">specialty espresso machine</span> able to stir emotions and stand out while integrating harmoniously into any interior design.
                    </p>
                </div>
            </div>

            <div class="md:order-1">
                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/manopola.jpg" alt="Manopola">
                </div>

                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/vapor.jpg" alt="Vapor">
                </div>

                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/retro.jpg" alt="Retro">
                </div>
            </div>
        </div>

        <div class="py-10 flex justify-center md:pt-[50px] lg:pt-[100px]">
            <div style="transform: translate(0px);">
                <div class="overflow-hidden">
                    <img ref="lastImage" class="max-w-full rounded-[20px]" src="~/assets/img/frontale.jpg" alt="Frontale">
                </div>
            </div>
        </div>

        <div class="w-[900px] flex flex-col justify-center max-w-full mx-auto my-5 lg:mb-32 xl:mb-40">
            <p class="font-bold text-[24px] text-gold leading-8 pb-7 md:pt-10 md:pb-24 md:text-[48px]">Do you want more information?</p>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">call us</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="tel:00390363815511">Tel. +39 0363 815511</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">send us an email</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="mailto:info@biepi.net">info@biepi.net</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">website</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="https://www.biepi.net">biepi.net</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10 text-[#858585] text-center font-regular md:py-20">
            C.F. e P.Iva: 03022890168 - REA 0342443 . Registro imprese di Bergamo - Capitale sociale 100.000,00 euro i.v.<br>
            Made by <a class="underline" href="https://www.apvd.it">APVD</a>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted } from "vue";

const presents = ref();
const title = ref();
const imageOrigin = ref();
const textBiepi = ref();
const lastImage = ref();
const video = ref();

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(presents.value,
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 2
    });

    gsap.fromTo(title.value,
    {
        opacity: 0,
        y: 100
    },
    {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out"
    });

    gsap.fromTo(imageOrigin.value,
    {
        opacity: 0,
        yPercent: 5
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "power2.out"
    });

    gsap.fromTo(textBiepi.value,
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: textBiepi.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        }
    });

    gsap.fromTo(lastImage.value,
    {
        opacity: 0,
        scale: 0.8
    },
    {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
            trigger: lastImage.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true
        }
    });
})
</script>

<style>
.sticked {
    --s-height: 472px;
    top: calc(50% - var(--s-height)/2);
}
</style>