# 🚀 Quick Start Guide

## 🎯 Cara Cepat Menggunakan Project

### Opsi 1: Quick Launch Menu (RECOMMENDED) ⭐
**Paling mudah** - Double click file ini:
```
quick-launch.bat
```

Menu interaktif akan muncul dengan pilihan:
1. Interactive Explorer (main version)
2. Widget Compact
3. Layout Card Style
4. Layout Timeline
5. Layout Accordion
6. Start Local Server
7. Exit

---

### Opsi 2: Local Server (BEST for Full Features)
**Untuk pengalaman terbaik** dengan semua fitur JavaScript:

**Double click:**
```
run-local-server.bat
```

**Requirement**: Python harus terinstall
- Otomatis start server di `http://localhost:8000`
- Otomatis buka browser ke interactive-lifespan-explorer.html
- Press `CTRL+C` untuk stop server

**Cek Python**: Buka CMD dan ketik `python --version`

---

### Opsi 3: Direct Open (No Server)
**Paling simple** tapi mungkin ada limitasi:

**Double click:**
```
open-direct.bat
```

Akan buka file langsung di browser (file:// protocol).

> ⚠️ **Note**: Beberapa browser membatasi file:// untuk load external JS.  
> Jika animals-data.js tidak load, gunakan Opsi 2 (local server).

---

## 📂 File Structure

```
Perbandingan umur/
│
├── 🎮 LAUNCHERS
│   ├── quick-launch.bat          ⭐ Menu interaktif
│   ├── run-local-server.bat      🌐 Start server + open
│   └── open-direct.bat           📄 Direct open
│
├── 🔬 INTERACTIVE VERSION
│   ├── interactive-lifespan-explorer.html  (Main)
│   ├── widget-interactive-compact.html     (Widget)
│   └── animals-data.js                     (Data module)
│
├── 📋 STATIC LAYOUTS
│   ├── layout-1-card-style.html
│   ├── layout-2-timeline.html
│   ├── layout-3-accordion.html
│   └── widget-blogspot-wordpress.html
│
├── 📖 DOCUMENTATION
│   ├── README-INTERACTIVE.md     (Comprehensive guide)
│   ├── README.md                 (Static layouts guide)
│   └── QUICK-START.md           (This file!)
│
└── 🛠️ UTILITIES
    ├── create-backup.bat         (Backup script)
    └── extracted_content.txt     (Source document)
```

---

## 🎯 Rekomendasi Penggunaan

| Scenario | Recommended File | Method |
|----------|-----------------|--------|
| **Testing locally** | interactive-lifespan-explorer.html | `run-local-server.bat` |
| **Quick preview** | Any HTML | `quick-launch.bat` |
| **Blog post** | interactive-lifespan-explorer.html | Copy-paste HTML |
| **Blog widget** | widget-interactive-compact.html | Copy-paste to widget |
| **Simple layout** | layout-1-card-style.html | Direct open |

---

## 🐛 Troubleshooting

### "animals-data.js failed to load"
**Solusi**: Gunakan local server
```
run-local-server.bat
```

### "Python not found"
**Solusi 1**: Install Python dari https://www.python.org/downloads/  
**Solusi 2**: Gunakan VS Code Live Server extension  
**Solusi 3**: Gunakan static layouts (layout-1, layout-2, layout-3)

### "Port 8000 already in use"
**Solusi**: Edit `run-local-server.bat`, ganti 8000 dengan port lain (misal 8080)

---

## 💡 Tips

1. **Untuk development**: Gunakan `run-local-server.bat`
2. **Untuk quick check**: Gunakan `quick-launch.bat`
3. **Untuk blog**: Copy isi HTML langsung ke post/widget area
4. **Backup data**: Run `create-backup.bat` sebelum edit

---

## 🌐 Browser Compatibility

✅ **Tested & Working**:
- Chrome/Edge (Chromium)
- Firefox
- Safari

⚠️ **file:// protocol limitations**:
- Some browsers block external JS from file://
- Use local server for best compatibility

---

**Need more info?** Lihat `README-INTERACTIVE.md` untuk dokumentasi lengkap!
