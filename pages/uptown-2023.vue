<template>
    <div>
        <div class="bg-black px-[24px]">
            <div class="relative mx-auto flex justify-center py-5 md:pt-[70px]">
                <img class="w-24 h-auto md:w-48" src="~/assets/img/Biepi-logo-negativo.svg" alt="Biepi logo negativo">
            </div>
            <p ref="presents" class="font-regular text-white pb-5 text-center uppercase tracking-widest text-[16px]">presents</p>
            <div ref="title">
                <h1 class="pt-10 text-white z-0 relative uppercase tracking-[0.2em] font-extralight text-center text-5xl md:text-[80px] md:font-extralight lg:text-[174px]">uptown</h1>
                <p class="my-5 tracking-[0.16em] uppercase font-regular text-[24px] text-white text-center  lg:text-[55px]">elegance and tradition</p>
            </div>
            <div ref="imageUptown" class="z-1 relative flex justify-center md:mt-3">
                <img src="~/assets/img/uptown.png" alt="Uptown">
            </div>
        </div>

        <div class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 mt-11 px-6">
            <img ref="uptownFrontale" src="~/assets/img/uptown-frontale.jpg" alt="Uptown frontale">
            <div class="flex flex-col justify-center p-4 mt-8 lg:p-8">
                <p class="font-regular text-black text-[16px] md:text-[24px]"><span class="font-bold">BIEPI Uptown</span> is a <span class="font-bold">traditional espresso machine</span> with a special twist, envisioned as a decor piece for café owners seeking <span class="font-bold">innovation</span> combined with <span class="font-bold">uniqueness and beauty</span>.</p>
            </div>
        </div>

        <div class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 mt-11 px-6">
            <img ref="uptownRetro" class="md:order-2" src="~/assets/img/uptown-retro.jpg" alt="Uptown retro">
            <div class="md:order-1 flex flex-col justify-center p-4 mt-8 lg:p-8">
                <p class="font-regular text-black text-[16px] md:text-[24px]">
                    Designed by <a class="underline" href="http://www.whynot-design.com/wp/" rel="noopener" target="_blank">Whynot</a>, BIEPI Uptown is characterized by a <span class="font-bold">sleek, matte black body</span> and walnut wood accessories. It’s equipped with <span class="font-bold">state of the art technology</span>, including:
                </p>
                <ul class="font-regular text-black text-[0.8em] list-disc md:text-[19px]">
                    <li class="my-[0.4em]">Shot timer</li>
                    <li class="my-[0.4em]">Programmable pre-infusion times</li>
                    <li class="my-[0.4em]">Boiler temperature setting</li>
                    <li class="my-[0.4em]">Coffee counters</li>
                    <li class="my-[0.4em]">Switch on and stand-by programming</li>
                    <li class="my-[0.4em]">Cleaning and maintenance programming</li>
                </ul>
            </div>
        </div>

        <div class="py-10 px-6 flex justify-center md:pt-[50px] lg:pt-[100px]">
            <div style="transform: translate(0px);">
                <div class="overflow-hidden">
                    <img ref="lastImage" class="max-w-full rounded-[20px]" src="~/assets/img/generale.jpg" alt="Generale">
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="w-[900px] px-6 flex flex-col justify-center max-w-full mx-auto my-5 lg:mb-32 xl:mb-40">
            <p class="font-bold text-[24px] text-gold leading-8 pb-7 md:leading-10 md:pt-10 md:pb-24 md:text-[48px]">Do you want more information?</p>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">call us</p>
                    <div class="mt-3 lg:text-[24px]">
                        <a class="font-bold text-black underline" href="tel:00390363815511">Tel. +39 0363 815511</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">send us an email</p>
                    <div class="mt-3 lg:text-[24px]">
                        <a class="font-bold text-black underline" href="mailto:info@biepi.net">info@biepi.net</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">website</p>
                    <div class="mt-3 lg:text-[24px]">
                        <a class="font-bold text-black underline" href="https://www.biepi.net">biepi.net</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10 px-6 text-[#858585] text-center font-regular md:py-20">
            C.F. e P.Iva: 03022890168 - REA 0342443 . Registro imprese di Bergamo - Capitale sociale 100.000,00 euro i.v.<br>
            Made by <a class="underline" href="https://www.apvd.it">APVD</a>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted } from "vue";

const presents = ref();
const title = ref();
const imageUptown = ref();
const lastImage = ref();
const uptownFrontale = ref();
const uptownRetro = ref();

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

    var tl = gsap.timeline();

    tl.fromTo(imageUptown.value,
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

    tl.fromTo(title.value,
    {
        opacity: 0,
        yPercent: 90
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2.5,
        ease: "power2.out"
    });

    gsap.fromTo(uptownFrontale.value,
    {
        opacity: 0,
        yPercent: 20
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        scrollTrigger: {
            trigger: uptownFrontale.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            once: true
        }
    });

    gsap.fromTo(uptownRetro.value,
    {
        opacity: 0,
        yPercent: 20
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        scrollTrigger: {
            trigger: uptownRetro.value,
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
            start: 'top bottom',
            end: 'bottom 30%',
            scrub: true,
            once: true
        }
    });
})
</script>