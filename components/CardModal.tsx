"use client";
import { useCardStore } from "@/store/card-store";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import cardImg from "@/assets/card.jpg";

export default function CardModal() {
  const { isOpen, setIsOpen, cardPreview } = useCardStore();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Image
        src={cardImg}
        alt="card"
        width={200}
        height={200}
        className="rounded-md cursor-pointer hover:scale-95 transition duration-300"
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all border-gray-500 border-2">
                  <Dialog.Title
                    as="h1"
                    className="text-xl font-medium leading-6 text-gray-200"
                  >
                    {cardPreview.name} - Card Prices
                  </Dialog.Title>
                  <div className="mt-6 text-sm space-y-2 text-gray-200">
                    <h2 className="uppercase text-end border-b mb-4">
                      Price: (USD)
                    </h2>
                    <div className="flex items-center justify-between">
                      <h2>Cardmarket</h2>
                      <h2>${cardPreview.card_prices[0].cardmarket_price}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2>TCGplayer</h2>
                      <h2>${cardPreview.card_prices[0].tcgplayer_price}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2>Ebay</h2>
                      <h2>${cardPreview.card_prices[0].ebay_price}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2>Amazon</h2>
                      <h2>${cardPreview.card_prices[0].amazon_price}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2>CoolStuffInc</h2>
                      <h2>${cardPreview.card_prices[0].coolstuffinc_price}</h2>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#cbfd00] px-4 py-2 text-sm font-medium text-black hover:bg-[#cafd00a2] transition duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
