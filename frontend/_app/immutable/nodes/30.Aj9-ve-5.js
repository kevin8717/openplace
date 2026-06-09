import "../chunks/Bzak7iHL.js";
import {
	p as q,
	a as f,
	b as $,
	m as L,
	c as m,
	d as i,
	$ as k,
	r as t,
	s as v,
	i as c,
	n as z,
	h as C,
	e as R,
	t as S,
} from "../chunks/Dbe4PVAU.js";
import { s as T } from "../chunks/C_mo-lyU.js";
import { i as Y } from "../chunks/Icl9dwnj.js";
import { e as D, i as P } from "../chunks/sR4NyGSS.js";
import { h as W } from "../chunks/ClbV77Km.js";
import { e as E, s as I } from "../chunks/B7_gUtXa.js";
import { L as j } from "../chunks/Cskb-8mx.js";
var A = m("<li><a> </a></li>"),
	H = m("<nav><h3>Sections</h3> <ul></ul></nav>"),
	M =
		m(`<div class="prose mx-auto p-4"><a class="flex justify-center" href="/"><!></a> <section><h2 class="text-center">Refund Policy</h2> <p class="text-center"><strong>Last update:</strong> September 17, 2025</p></section> <section><!> <section><h3>How to request a refund?</h3> <ul><li>Contact official support via email at <a href="mailto:refund@wplace.live">refund@wplace.live</a></li> <li>Provide your user ID, registered email, proof of payment, and reason for the request.</li></ul></section> <section><h3>You may request a refund when:</h3> <ul><li>You are charged twice for the same service.</li> <li>You are unable to use the service due to technical issues with Wplace lasting more than 24
					hours.</li> <li>You have not used the services within 7 calendar days after purchase.</li></ul></section> <section><h3>Refunds will not be granted when:</h3> <ul><li>More than 7 days have passed since the purchase.</li> <li>Cancellation occurs after the services have been used.</li> <li>There is a violation of the terms of use, especially in cases of account ban.</li> <li>There are issues related to card usage, such as: <ul><li>Loss, theft, or robbery of the card;</li> <li>Unauthorized use by third parties;</li> <li>Disputes over purchases made by unauthorized users, when it is not possible to prove a
							system failure.</li></ul></li> <li>In these cases, the cardholder must contact the financial institution directly to take
					appropriate actions, such as blocking the card, disputing charges, and requesting a reversal,
					according to the bank or card operator's rules.</li> <li>Refunds will only be considered in situations where a technical failure of the platform's
					system is proven.</li></ul></section> <section><h3>Deadlines:</h3> <ul><li>Wplace will respond within 10 business days.</li> <li>The refund will be processed using the same payment method and will occur within 7 to 30 days.</li></ul></section></section></div>`);
function Q(g, y) {
	q(y, !0);
	let u = R([]);
	var h = M();
	W("17oe413", (s) => {
		L(() => {
			k.title = "Wplace - Refund Policy";
		});
	});
	var d = i(h),
		b = i(d);
	(j(b, { size: "lg", hasText: !0 }), t(d));
	var p = v(d, 4),
		w = i(p);
	{
		var x = (s) => {
			var o = H(),
				r = v(i(o), 2);
			(D(
				r,
				21,
				() => c(u),
				P,
				(n, l) => {
					var e = A(),
						a = i(e),
						_ = i(a, !0);
					(t(a),
						t(e),
						S(() => {
							(I(a, "href", `#${c(l).id}`), T(_, c(l).title));
						}),
						f(n, e));
				},
			),
				t(r),
				t(o),
				f(s, o));
		};
		Y(w, (s) => {
			c(u).length > 0 && s(x);
		});
	}
	(z(8),
		t(p),
		E(p, () => (s) => {
			var n;
			const o = s.querySelectorAll("section"),
				r = [];
			for (const l of o) {
				const e =
					(n = l.querySelector("h3, h4")) == null ? void 0 : n.textContent;
				if (e) {
					const a = e
						.toLowerCase()
						.replace(/[^a-z0-9]+/g, "-")
						.replace(/^-+|-+$/g, "");
					((l.id = a), r.push({ title: e, id: a }));
				}
			}
			C(u, r);
		}),
		t(h),
		f(g, h),
		$());
}
export { Q as component };
