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

        <div class="container max-w-[1500px] md:grid md:grid-cols-2 md:mx-auto lg:px-6">
            <div class="sticked container mx-auto py-10 p-4 gap-5 md:gap-x-10 md:order-2 md:my-15 lg:gap-x-16">
                <div class="sticked mb-14 md:mb-auto md:sticky md:w-96 md:max-w-full md:mx-auto xl:w-[600px]">
                    <p ref="textBiepi" class="mt-6 text-white font-regular lg:text-2xl">
                        <span class="font-bold">Biepi Origin</span> blends elements of the industrial and design worlds, representing the maximum expression of our new aesthetic language: a mix of emotion and elegance, natural materials alternating with black and stainless steel surfaces.<br><br>
                        Designed by <a href="https://www.whynot-design.com/" class="underline" target="_blank">Whynot</a>, Biepi Origin is a specialty espresso machine able to stir emotions and stand out while integrating harmoniously into any interior design.
                    </p>
                </div>
            </div>

            <div class="md:order-1">
                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/origin-lato.jpg" alt="Origin lato">
                </div>

                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/origin-schermo.jpg" alt="Origin schermo">
                </div>
            </div>
        </div>

        <div class="container max-w-[1500px] py-10 flex justify-center flex-col md:m-auto md:pt-[50px] lg:pt-[100px]">
            <p class="font-bold text-[24px] text-gold leading-8 pb-7 md:leading-[50px] md:pt-10 md:pb-24 md:text-[48px]">Do you want more information?<br>
                <span class="text-white text-[20px] md:text-[40px]"><a href="mailto:r.speziari@biepi.net" class="underline">Get in touch</a> with us to discover more about Origin</span>
            </p>
            <div style="transform: translate(0px);">
                <div class="overflow-hidden">
                    <img ref="lastImage" class="rounded-[20px]" src="~/assets/img/origin-ambientata.jpg" alt="Origin ambientata">
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="w-[900px] flex flex-col justify-center max-w-full mx-auto my-5 lg:mb-32 xl:mb-40">
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
                        <a class="font-bold text-white underline" href="https://www.biepi.net/en" target="_blank">biepi.net</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10 text-[#858585] text-center font-regular md:py-20">
            C.F. e P.Iva: 03022890168 - REA 0342443 . Registro imprese di Bergamo - Capitale sociale 100.000,00 euro i.v.<br>
            Made by <a class="underline" href="https://www.apvd.it" target="_blank">APVD</a>
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
            scrub: true,
            once: true
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
            end: 'bottom 30%',
            scrub: true,
            once: true
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