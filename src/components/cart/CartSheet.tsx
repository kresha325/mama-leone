"use client";

import { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/cart-context";
import { business, formatPrice } from "@/data/menu";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function buildOrderText(
  cart: ReturnType<typeof useCartContext>["cart"],
  note: string,
  total: number
) {
  const lines = [
    `Guten Tag ${business.name},`,
    "ich möchte folgende Bestellung aufgeben:",
    "",
  ];

  cart.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.quantity}x ${item.name} (${item.category}) - ${formatPrice(item.price * item.quantity)}`
    );
  });

  if (note.trim()) {
    lines.push("");
    lines.push(`Anmerkung: ${note.trim()}`);
  }

  lines.push("");
  lines.push(`Gesamt: ${formatPrice(total)}`);
  lines.push("");
  lines.push("Vielen Dank!");

  return lines.join("\n");
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const {
    cart,
    note,
    setNote,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  } = useCartContext();

  const [showWaiterModal, setShowWaiterModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSms = () => {
    if (cart.length === 0) return;
    const body = encodeURIComponent(buildOrderText(cart, note, cartTotal));
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const separator = isIOS ? "&" : "?";
    window.open(
      `sms:${business.phoneLink}${separator}body=${body}`,
      "_self"
    );
  };

  const handleCall = () => {
    window.open(`tel:${business.phoneLink}`, "_self");
  };

  const handleWaiterConfirm = () => {
    setShowWaiterModal(false);
    setConfirmed(true);
    clearCart();
    onOpenChange(false);
    window.setTimeout(() => setConfirmed(false), 3500);
  };

  return (
    <>
      {open && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
            aria-hidden="true"
          />

          <aside
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-border bg-background shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
          >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 id="cart-title" className="font-display text-2xl font-bold text-primary">
              Warenkorb
            </h2>
            <p className="text-sm text-muted-foreground">
              {cartCount === 0
                ? "Noch keine Gerichte ausgewählt"
                : `${cartCount} ${cartCount === 1 ? "Artikel" : "Artikel"}`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Warenkorb schließen"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={item.id} className="border-b border-border pb-5 last:border-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium leading-tight">{item.name}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{item.category}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground transition hover:text-primary"
                        aria-label={`${item.name} entfernen`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                          aria-label="Menge verringern"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition hover:border-primary hover:text-primary"
                          aria-label="Menge erhöhen"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-semibold tabular-nums text-primary">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <label className="mt-6 block">
                <span className="mb-2 block text-sm font-medium">Anmerkungen</span>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={3}
                  placeholder="z. B. ohne Zwiebeln, Tisch 5 …"
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </label>
            </div>

            <div className="border-t border-border bg-card px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-menu text-lg font-semibold">Gesamt</span>
                <span className="font-menu text-2xl font-bold text-primary tabular-nums">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setShowWaiterModal(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Kellner informieren
                </button>
                <button
                  type="button"
                  onClick={handleSms}
                  className="w-full rounded-full border border-border px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Bestellung per SMS
                </button>
                <button
                  type="button"
                  onClick={handleCall}
                  className="w-full rounded-full border border-border px-4 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Anrufen · {business.phone}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-muted-foreground">
              Wählen Sie Gerichte aus der Speisekarte und fügen Sie sie hier hinzu.
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Zur Speisekarte
            </button>
          </div>
        )}
          </aside>
        </>
      )}

      {showWaiterModal && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowWaiterModal(false)}
          />
          <div className="relative w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl">
            <h3 className="font-menu text-xl font-bold">Bestellung bestätigen</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Zeigen Sie diese Bestellung dem Kellner. Der Warenkorb wird danach geleert.
            </p>
            <div className="mt-4 max-h-48 overflow-y-auto rounded-xl bg-muted/40 p-4 text-sm">
              {cart.map((item) => (
                <p key={item.id}>
                  {item.quantity}x {item.name}
                </p>
              ))}
              {note.trim() && (
                <p className="mt-2 border-t border-border pt-2 italic">
                  Anmerkung: {note.trim()}
                </p>
              )}
              <p className="mt-2 font-semibold text-primary">
                Gesamt: {formatPrice(cartTotal)}
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setShowWaiterModal(false)}
                className="flex-1 rounded-full border border-border py-2.5 text-sm font-semibold"
              >
                Abbrechen
              </button>
              <button
                type="button"
                onClick={handleWaiterConfirm}
                className="flex-1 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Bestätigen
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmed && (
        <div className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full bg-foreground px-5 py-3 text-sm text-background shadow-lg">
          Bestellung an den Kellner übermittelt
        </div>
      )}
    </>
  );
}
