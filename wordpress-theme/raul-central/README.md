# Raul Central Premium — Tema WordPress

Tema single-page inspirado na Central Premium (céu noturno + meteoros + cards estilo Apple).

## Como instalar

1. Crie uma pasta chamada **`raul-central`** no seu computador.
2. Copie estes arquivos para dentro dela, mantendo os nomes exatos:
   - `style.css`
   - `functions.php`
   - `header.php`
   - `footer.php`
   - `index.php`
3. Crie uma subpasta **`assets/`** dentro de `raul-central/` e coloque:
   - `bg-night.jpg` — imagem de fundo (céu noturno)
   - `profile.jpg` — sua foto de perfil
4. Compacte a pasta `raul-central` em um `.zip`.
5. No WordPress: **Aparência → Temas → Adicionar novo → Enviar tema** e envie o zip.
6. Ative o tema.
7. Em **Configurações → Leitura**, defina "Sua página inicial exibe" como **Uma página estática** ou deixe como "Seus posts mais recentes" (o `index.php` sempre será renderizado).

## Personalização rápida

Edite os links no topo do `index.php`:

```php
$whatsapp_url = 'https://api.whatsapp.com/send/?phone=5585989608620';
$instagram    = 'https://instagram.com/rauleleutterio';
$email        = 'mailto:rauleleutterio@gmail.com';
$youtube_vlog = 'https://youtube.com/@exemplo-vlog';
```

## Observações

- Sem dependências externas. CSS puro, animações via `@keyframes`.
- Compatível com WordPress 6.x+ e PHP 7.4+.
- Os meteoros atravessam a tela em loop, com opacidade 40%, sem aceleração.
