# node-hex

> forked from https://github.com/gagle/node-hex, return hex string instead of print to stdout

## Pretty-prints a Buffer

[![npm][npm-image]][npm-url]

Prints the Buffer. No configuration, just give it a Buffer.

```javascript
const crypto = require('crypto');
const hex = require('node-hex');

console.log(hex(crypto.getRandomValues(Buffer.alloc(512))));
```

```bash
000000   EF CA 83 07 2E 39 82 06 87 C6 6A 46 5A F1 C6 78   ïÊ...9...ÆjFZñÆx
000010   EF E6 72 8B 50 BF A8 4F 93 47 E5 7A 9A FA 02 56   ïær.P¿¨O.Gåz.ú.V
000020   0B 4B 61 D3 9A DC 8B F9 B3 D8 4D D1 25 FE FB 40   .KaÓ.Ü.ù³ØMÑ%þû@
000030   A3 84 4F C1 08 0A 10 49 EE D6 1F 86 14 50 7C 09   £.OÁ...IîÖ...P|.
000040   4B 22 79 1E D6 D3 DB 12 44 9F 24 EE 3A AA 6D 83   K"y.ÖÓÛ.D.$î:ªm.
000050   FC 8C 5A 61 E2 F3 C3 21 3A 83 ED FF D2 9F F7 00   ü.ZaâóÃ!:.íÿÒ.÷.
000060   80 FC C7 92 1A 67 31 60 EB E9 FF 84 6D 2B 76 61   .üÇ..g1`ëéÿ.m+va
000070   9D 8F BA 29 A7 F2 70 93 21 B7 DB A2 39 3D E9 C8   ..º)§òp.!·Û¢9=éÈ
000080   73 44 1A 3F 3D 00 AA 4A 6A 03 2F 66 61 73 7F 39   sD.?=.ªJj./fas.9
000090   DB C3 6C 5B 7F AD 7C DC 43 85 DB 06 DE 6A B0 DE   ÛÃl[.­|ÜC.Û.Þj°Þ
0000A0   D2 46 35 E4 65 45 D2 7D 13 4D 79 5F 12 C2 DD 5F   ÒF5äeEÒ}.My_.ÂÝ_
0000B0   1B EA 5E 8F AC 34 EF 2C B0 9C 78 CD BE 27 C8 12   .ê^.¬4ï,°.xÍ¾'È.
0000C0   3A 87 5A 58 57 26 C3 FE 95 66 A0 54 A8 0C 69 2B   :.ZXW&Ãþ.f T¨.i+
0000D0   33 A9 6B 9B B6 64 E5 F9 53 F7 E8 74 86 38 57 13   3©k.¶dåùS÷èt.8W.
0000E0   FD 37 E3 68 92 4E B4 F6 19 0E E6 CE 27 42 39 47   ý7ãh.N´ö..æÎ'B9G
0000F0   88 C3 55 D4 D9 D2 E9 F0 46 75 A8 FA E0 14 87 0B   .ÃUÔÙÒéðFu¨úà...
000100   AE B2 AD C1 5B 0A 7F E1 3A 81 2C 5C AC 72 6E 0F   ®²­Á[..á:.,\¬rn.
000110   F1 AC 6E 0E 60 ED 3E 30 D4 55 F9 A9 17 A3 D7 7E   ñ¬n.`í>0ÔUù©.£×~
000120   A1 84 06 5F D2 6F A6 DF 1E F5 7C DC 8E 6D 70 07   ¡.._Òo¦ß.õ|Ü.mp.
000130   58 F1 E2 48 FA CE 20 FE 06 1B 18 EC DD 81 AD A1   XñâHúÎ þ...ìÝ.­¡
000140   75 D9 6E 3E E4 92 BE A8 DF 9B 63 69 84 B2 64 E8   uÙn>ä.¾¨ß.ci.²dè
000150   C1 A8 04 43 11 76 54 D8 4E C7 AE 91 41 86 68 0E   Á¨.C.vTØNÇ®.A.h.
000160   64 C7 A3 13 A3 86 89 18 F1 9F BA 41 13 9D A5 15   dÇ£.£...ñ.ºA..¥.
000170   F0 BB 48 16 A7 6D 93 77 F8 E6 BD 0B 3B 8C 65 3B   ð»H.§m.wøæ½.;.e;
000180   A2 DF BC 86 71 58 D6 67 C5 4A C3 93 52 7A 8B D9   ¢ß¼.qXÖgÅJÃ.Rz.Ù
000190   A2 E7 4E DD 4E CC 76 D4 13 59 8C 50 18 7F DF FC   ¢çNÝNÌvÔ.Y.P..ßü
0001A0   66 18 CC 3E A0 91 B4 98 2F 43 98 A1 6F 6D 03 0C   f.Ì> .´./C.¡om..
0001B0   08 A4 1C 39 9D F9 F4 92 D6 37 1E 04 C0 1F BE EC   .¤.9.ùô.Ö7..À.¾ì
0001C0   7F AF 14 79 3B 16 F8 34 59 6A AA 2E D4 C1 D3 DB   .¯.y;.ø4Yjª.ÔÁÓÛ
0001D0   E4 FE BA 53 89 4F 5E 19 76 28 FF E8 F8 E2 63 E5   äþºS.O^.v(ÿèøâcå
0001E0   AF A5 9F B9 A0 92 62 F6 A5 C7 31 CD 71 74 39 78   ¯¥.¹ .bö¥Ç1Íqt9x
0001F0   FD 17 9D 37 C9 88 96 1F 94 AB 77 B8 CF AB 1B E9   ý..7É....«w¸Ï«.é
```

[npm-image]: http://img.shields.io/npm/v/node-hex.svg?style=flat
[npm-url]: https://npmjs.org/package/node-hex
