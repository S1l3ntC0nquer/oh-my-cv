if(!self.define){let l,n={};const u=(u,r)=>(u=new URL(u+".js",r).href,n[u]||new Promise((n=>{if("document"in self){const l=document.createElement("script");l.src=u,l.onload=n,document.head.appendChild(l)}else l=u,importScripts(u),n()})).then((()=>{let l=n[u];if(!l)throw new Error(`Module ${u} didn’t register its module`);return l})));self.define=(r,i)=>{const e=l||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const t=l=>u(l,e),o={module:{uri:e},exports:s,require:t};n[e]=Promise.all(r.map((l=>o[l]||t(l)))).then((l=>(i(...l),s)))}}define(["./workbox-70d50b04"],(function(l){"use strict";self.skipWaiting(),l.clientsClaim(),l.precacheAndRoute([{url:"_nuxt/_id_.pBheutyw.css",revision:null},{url:"_nuxt/2oJWbEOo.js",revision:null},{url:"_nuxt/3IE2shJ0.js",revision:null},{url:"_nuxt/3TATJI7h.js",revision:null},{url:"_nuxt/9aT6Bdf9.js",revision:null},{url:"_nuxt/B_i9asfM.js",revision:null},{url:"_nuxt/B-lZjTdr.js",revision:null},{url:"_nuxt/B2Cf9XSq.js",revision:null},{url:"_nuxt/B4VqtPa2.js",revision:null},{url:"_nuxt/B5uW3Zvf.js",revision:null},{url:"_nuxt/B7alP455.js",revision:null},{url:"_nuxt/B8ssZoUh.js",revision:null},{url:"_nuxt/bC257e71.js",revision:null},{url:"_nuxt/Bc5xkKR1.js",revision:null},{url:"_nuxt/BfLuTCmN.js",revision:null},{url:"_nuxt/BgcXEElh.js",revision:null},{url:"_nuxt/BGLI1Hdo.js",revision:null},{url:"_nuxt/BixK_rmB.js",revision:null},{url:"_nuxt/BjEAMk2B.js",revision:null},{url:"_nuxt/BjQpw8A4.js",revision:null},{url:"_nuxt/BKHnw-tg.js",revision:null},{url:"_nuxt/BLuZWbUW.js",revision:null},{url:"_nuxt/bold.2JfRo6pj.ttf",revision:null},{url:"_nuxt/bold.B4o9Siml.ttf",revision:null},{url:"_nuxt/bold.CArNNkSo.otf",revision:null},{url:"_nuxt/bold.CX3nFGdj.otf",revision:null},{url:"_nuxt/bold.D1b7czW9.ttf",revision:null},{url:"_nuxt/bold.D8A7svot.ttf",revision:null},{url:"_nuxt/bold.DcqXiNP3.otf",revision:null},{url:"_nuxt/bolditalic.BmuAIsMD.ttf",revision:null},{url:"_nuxt/bolditalic.BuOu_Z5X.otf",revision:null},{url:"_nuxt/bolditalic.Cn4P82iL.otf",revision:null},{url:"_nuxt/bolditalic.DbIlENiU.ttf",revision:null},{url:"_nuxt/bolditalic.gU__EM_J.ttf",revision:null},{url:"_nuxt/bolditalic.uP5PuZ0j.otf",revision:null},{url:"_nuxt/BRk-K-rg.js",revision:null},{url:"_nuxt/BTpWsGps.js",revision:null},{url:"_nuxt/Bu7cwAKA.js",revision:null},{url:"_nuxt/BuapDI9Y.js",revision:null},{url:"_nuxt/BupSXVCO.js",revision:null},{url:"_nuxt/BWBTHuhh.js",revision:null},{url:"_nuxt/BXYnMxBe.js",revision:null},{url:"_nuxt/BY6pwuIY.js",revision:null},{url:"_nuxt/BygKL3ZF.js",revision:null},{url:"_nuxt/BypH-vXm.js",revision:null},{url:"_nuxt/BYtUz8ZP.js",revision:null},{url:"_nuxt/Bzb7OGdO.js",revision:null},{url:"_nuxt/C_scCXcs.js",revision:null},{url:"_nuxt/C0gMnHYz.js",revision:null},{url:"_nuxt/C6jZPdYn.js",revision:null},{url:"_nuxt/C75U4IDy.js",revision:null},{url:"_nuxt/C9L3yaDO.js",revision:null},{url:"_nuxt/CaTQHr3j.js",revision:null},{url:"_nuxt/CCBS_C5_.js",revision:null},{url:"_nuxt/CclFk2sa.js",revision:null},{url:"_nuxt/CdwIjGvD.js",revision:null},{url:"_nuxt/CfnpWUYo.js",revision:null},{url:"_nuxt/CHZFbgwk.js",revision:null},{url:"_nuxt/CJMkDBdu.js",revision:null},{url:"_nuxt/Ckkbw-AO.js",revision:null},{url:"_nuxt/codicon.DCmgc-ay.ttf",revision:null},{url:"_nuxt/CrrKwR0a.js",revision:null},{url:"_nuxt/CSQMegEN.js",revision:null},{url:"_nuxt/css.worker-DjhtgXfi.js",revision:null},{url:"_nuxt/CTNlIIiR.js",revision:null},{url:"_nuxt/CU-8kQLH.js",revision:null},{url:"_nuxt/CuFlys0T.js",revision:null},{url:"_nuxt/CV9EbfTh.js",revision:null},{url:"_nuxt/CXKOl_mN.js",revision:null},{url:"_nuxt/CyVeKkvQ.js",revision:null},{url:"_nuxt/CzF1MCbP.js",revision:null},{url:"_nuxt/D_OY6ada.js",revision:null},{url:"_nuxt/D0UiDa5C.js",revision:null},{url:"_nuxt/D2PfwrvU.js",revision:null},{url:"_nuxt/D2Z7JJdl.js",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/D7lU1fdU.js",revision:null},{url:"_nuxt/D7vQKInI.js",revision:null},{url:"_nuxt/D99FuqVS.js",revision:null},{url:"_nuxt/D9QErk0A.js",revision:null},{url:"_nuxt/D9yiNO04.js",revision:null},{url:"_nuxt/dashboard.oGPYLxw8.css",revision:null},{url:"_nuxt/DAYPDs-2.js",revision:null},{url:"_nuxt/DB0RB20n.js",revision:null},{url:"_nuxt/DDpSJMW6.js",revision:null},{url:"_nuxt/DDrv2Hr-.js",revision:null},{url:"_nuxt/DeYg-96x.js",revision:null},{url:"_nuxt/Dgyr3wWZ.js",revision:null},{url:"_nuxt/DI1MVzAg.js",revision:null},{url:"_nuxt/DIovg4uR.js",revision:null},{url:"_nuxt/DlAUqK2U.js",revision:null},{url:"_nuxt/DLPipH_Q.js",revision:null},{url:"_nuxt/DLs3tTet.js",revision:null},{url:"_nuxt/DmdQbaLT.js",revision:null},{url:"_nuxt/DOAuugfS.js",revision:null},{url:"_nuxt/DoFvH58O.js",revision:null},{url:"_nuxt/DOk3G3cc.js",revision:null},{url:"_nuxt/DRC6TkPh.js",revision:null},{url:"_nuxt/DrRCxMg5.js",revision:null},{url:"_nuxt/DUuSV6vW.js",revision:null},{url:"_nuxt/DVG02705.js",revision:null},{url:"_nuxt/DvSxYeG4.js",revision:null},{url:"_nuxt/DVYH6Lj_.js",revision:null},{url:"_nuxt/DWFvC0_9.js",revision:null},{url:"_nuxt/DWGz5Zuj.js",revision:null},{url:"_nuxt/DyKutqhl.js",revision:null},{url:"_nuxt/editor.C692Xp-0.css",revision:null},{url:"_nuxt/editor.worker-mIhdKcuk.js",revision:null},{url:"_nuxt/entry.DVOVpZHZ.css",revision:null},{url:"_nuxt/error-404.DIiMjh7_.css",revision:null},{url:"_nuxt/error-500.Dm0xkD8V.css",revision:null},{url:"_nuxt/FNqbgIOG.js",revision:null},{url:"_nuxt/gRuQeaLk.js",revision:null},{url:"_nuxt/italic.B006CNRt.otf",revision:null},{url:"_nuxt/italic.BfYpPhiQ.ttf",revision:null},{url:"_nuxt/italic.BhLaVUsL.ttf",revision:null},{url:"_nuxt/italic.CtQkwsbK.otf",revision:null},{url:"_nuxt/italic.sUu3xK4L.otf",revision:null},{url:"_nuxt/italic.U3zDcBL8.ttf",revision:null},{url:"_nuxt/jCD8P8Lr.js",revision:null},{url:"_nuxt/KaTeX_AMS-Regular.BQhdFMY1.woff2",revision:null},{url:"_nuxt/KaTeX_AMS-Regular.DRggAlZN.ttf",revision:null},{url:"_nuxt/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf",revision:null},{url:"_nuxt/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2",revision:null},{url:"_nuxt/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2",revision:null},{url:"_nuxt/KaTeX_Caligraphic-Regular.wX97UBjC.ttf",revision:null},{url:"_nuxt/KaTeX_Fraktur-Bold.BdnERNNW.ttf",revision:null},{url:"_nuxt/KaTeX_Fraktur-Bold.CL6g_b3V.woff2",revision:null},{url:"_nuxt/KaTeX_Fraktur-Regular.CB_wures.ttf",revision:null},{url:"_nuxt/KaTeX_Fraktur-Regular.CTYiF6lA.woff2",revision:null},{url:"_nuxt/KaTeX_Main-Bold.Cx986IdX.woff2",revision:null},{url:"_nuxt/KaTeX_Main-Bold.waoOVXN0.ttf",revision:null},{url:"_nuxt/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2",revision:null},{url:"_nuxt/KaTeX_Main-BoldItalic.DzxPMmG6.ttf",revision:null},{url:"_nuxt/KaTeX_Main-Italic.3WenGoN9.ttf",revision:null},{url:"_nuxt/KaTeX_Main-Italic.NWA7e6Wa.woff2",revision:null},{url:"_nuxt/KaTeX_Main-Regular.B22Nviop.woff2",revision:null},{url:"_nuxt/KaTeX_Main-Regular.ypZvNtVU.ttf",revision:null},{url:"_nuxt/KaTeX_Math-BoldItalic.B3XSjfu4.ttf",revision:null},{url:"_nuxt/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2",revision:null},{url:"_nuxt/KaTeX_Math-Italic.flOr_0UB.ttf",revision:null},{url:"_nuxt/KaTeX_Math-Italic.t53AETM-.woff2",revision:null},{url:"_nuxt/KaTeX_SansSerif-Bold.CFMepnvq.ttf",revision:null},{url:"_nuxt/KaTeX_SansSerif-Bold.D1sUS0GD.woff2",revision:null},{url:"_nuxt/KaTeX_SansSerif-Italic.C3H0VqGB.woff2",revision:null},{url:"_nuxt/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf",revision:null},{url:"_nuxt/KaTeX_SansSerif-Regular.BNo7hRIc.ttf",revision:null},{url:"_nuxt/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2",revision:null},{url:"_nuxt/KaTeX_Script-Regular.C5JkGWo-.ttf",revision:null},{url:"_nuxt/KaTeX_Script-Regular.D3wIWfF6.woff2",revision:null},{url:"_nuxt/KaTeX_Size1-Regular.Dbsnue_I.ttf",revision:null},{url:"_nuxt/KaTeX_Size1-Regular.mCD8mA8B.woff2",revision:null},{url:"_nuxt/KaTeX_Size2-Regular.B7gKUWhC.ttf",revision:null},{url:"_nuxt/KaTeX_Size2-Regular.Dy4dx90m.woff2",revision:null},{url:"_nuxt/KaTeX_Size3-Regular.DgpXs0kz.ttf",revision:null},{url:"_nuxt/KaTeX_Size4-Regular.Dl5lxZxV.woff2",revision:null},{url:"_nuxt/KaTeX_Size4-Regular.DWFBv043.ttf",revision:null},{url:"_nuxt/KaTeX_Typewriter-Regular.CO6r4hn1.woff2",revision:null},{url:"_nuxt/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf",revision:null},{url:"_nuxt/m09vb5r-.js",revision:null},{url:"_nuxt/nThFqY4i.js",revision:null},{url:"_nuxt/oUrAUDnX.js",revision:null},{url:"_nuxt/regular.C59i-JIY.otf",revision:null},{url:"_nuxt/regular.DCtZAFBW.otf",revision:null},{url:"_nuxt/regular.DT0fM1uu.ttf",revision:null},{url:"_nuxt/regular.DTSkpAnp.ttf",revision:null},{url:"_nuxt/regular.DysTBsqN.ttf",revision:null},{url:"_nuxt/regular.lvl9fZ61.ttf",revision:null},{url:"_nuxt/regular.ujiHdYas.otf",revision:null},{url:"_nuxt/ul-Lp4lw.js",revision:null},{url:"_nuxt/UMmp-gVE.js",revision:null},{url:"_nuxt/VuadG5SK.js",revision:null},{url:"_nuxt/w7.G_kyatnr.ttf",revision:null},{url:"_nuxt/w9.LxosMOIK.ttf",revision:null},{url:"_nuxt/yf5bffbF.js",revision:null},{url:"_nuxt/ZlaFEk-P.js",revision:null},{url:"200",revision:"161c68d4d8c799cd4b1fdee9c215fa48"},{url:"404",revision:"161c68d4d8c799cd4b1fdee9c215fa48"},{url:"apple-touch-icon.png",revision:"8b5d23adf13cc40f215a72fad25d9b1d"},{url:"dashboard",revision:"ce2d91170e7b9317f40d83390d54106a"},{url:"en/dashboard",revision:"0b59ae41401b36e84ef3e78977f05887"},{url:"en",revision:"9193b38188a2d9864b5ebdfac8ee5bef"},{url:"favicon-dark.svg",revision:"496f2c5bda76eacee78c8e1fc92d00d1"},{url:"favicon.svg",revision:"1301d06df37eff0ca0bf808656842828"},{url:"/",revision:"deae5b36da4698500e6b03a1bd763e40"},{url:"pwa-192x192.png",revision:"e3ee23607a02913fa308a010c3f732be"},{url:"pwa-512x512.png",revision:"94db878cb6e20a5ae061b5352c96d243"},{url:"safari-pinned-tab.svg",revision:"ebc4be35e86410cc899f73d56063dc68"},{url:"sp/dashboard",revision:"1216a7eba41a63672c079ab41a8eeb5d"},{url:"sp",revision:"0423e79618d866e67528d272d8422949"},{url:"zh-cn/dashboard",revision:"c2b91bbc84a7d8b45b8c041653af7794"},{url:"zh-cn",revision:"ea2b8c9754ac64f2b5c6410bc301d87c"},{url:"zh-tw/dashboard",revision:"76842c743b8c5a0ca118501072e7841a"},{url:"zh-tw",revision:"84150e1fa3eaa8522fa73377082d6e1b"},{url:"_payload.json",revision:"6ce8ae9d2b91a1a0ee1112c863a7bfb4"},{url:"dashboard/_payload.json",revision:"5c13f3a317c2b25574e3b19b062f6ea1"},{url:"en/_payload.json",revision:"2023d7508da82cb405856146edac6599"},{url:"en/dashboard/_payload.json",revision:"e623553506d4d3ea5281723ef9308a71"},{url:"sp/_payload.json",revision:"10ce1b151974cdedc8eb022710e53e33"},{url:"sp/dashboard/_payload.json",revision:"e4351b6a1356be85158ba28c2076ba74"},{url:"zh-cn/_payload.json",revision:"122ce59ef35188a5e6ea3ac8600a3fc9"},{url:"zh-cn/dashboard/_payload.json",revision:"3dc9f2b8af0828e01a4973e7071fd3fa"},{url:"zh-tw/_payload.json",revision:"bac4dd903ea9c6f20b458d55a24cb4ce"},{url:"zh-tw/dashboard/_payload.json",revision:"a3b719cd76910ca53c73ac9440cede25"},{url:"_nuxt/builds/latest.json",revision:"57aa9014a481fce7731019ff3bbdd423"},{url:"_nuxt/builds/meta/b83b98ad-c8e8-43fd-803f-99b02faa3756.json",revision:null},{url:"manifest.webmanifest",revision:"050f69fd2dd2e15b3b904e1475dd1e6a"}],{}),l.cleanupOutdatedCaches(),l.registerRoute(new l.NavigationRoute(l.createHandlerBoundToURL("/"))),l.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new l.CacheFirst({cacheName:"google-fonts-cache",plugins:[new l.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new l.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));