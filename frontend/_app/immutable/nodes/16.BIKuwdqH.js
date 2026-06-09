import "../chunks/Bzak7iHL.js";
import "../chunks/B7vrJrEX.js";
import { o as m } from "../chunks/DMoMXVXI.js";
import { p as s, b as i, j as p, $ as d } from "../chunks/Dbe4PVAU.js";
import { h as f } from "../chunks/ClbV77Km.js";
import { i as n } from "../chunks/BVnIq1Qc.js";
import "../chunks/BhCkpOlh.js";
import { t as h } from "../chunks/OvJd4Dh6.js";
import { u as r } from "../chunks/DU-2YUMG.js";
import { P as o } from "../chunks/JKnWQwH6.js";
import { g as a } from "../chunks/C6d2kgDd.js";
function w(c, t) {
	(s(t, !1),
		m(() => {
			if (r.hasPermission(o.dashboard.team.tickets)) {
				a("/dashboard/team/leaderboard-tickets");
				return;
			}
			if (r.hasPermission(o.dashboard.team.reports)) {
				a("/dashboard/team/leaderboard-reports");
				return;
			}
		}),
		n(),
		f("dwk55d", (u) => {
			p(
				(e) => {
					d.title = `Wplace - ${e ?? ""}`;
				},
				[() => h()],
			);
		}),
		i());
}
export { w as component };
