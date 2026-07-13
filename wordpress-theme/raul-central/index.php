<?php
/**
 * index.php - página única (single-page) da Central Premium
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();

$profile_img  = 'https://ra-ul.bio/wp-content/uploads/2026/07/profile.jpg';
$whatsapp_url = 'https://api.whatsapp.com/send/?phone=5585989608620';
$instagram    = 'https://instagram.com/rauleleutterio';
$email        = 'mailto:rauleleutterio@gmail.com';

?>
<main class="main">
    <!-- Fundo -->
    <div class="bg-wrap">
        <div class="bg-image"></div>
        <div class="bg-overlay"></div>
        <div class="meteor meteor-1" aria-hidden="true"></div>
        <div class="meteor meteor-2" aria-hidden="true"></div>
    </div>

    <div class="container">
        <!-- Hero -->
        <section class="hero">
            <div class="avatar-wrap">
                <span class="pulse" aria-hidden="true"></span>
                <span class="pulse" aria-hidden="true"></span>
                <span class="pulse" aria-hidden="true"></span>
                <div class="avatar-ring" aria-hidden="true"></div>
                <div class="avatar">
                    <img src="<?php echo esc_url( $profile_img ); ?>" alt="Foto de perfil de Raul Eleutério" />
                </div>
            </div>
            <h1 class="name">Raul Eleutério</h1>
            <p class="handle">
                <a href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer">@rauleleutterio</a>
            </p>
        </section>

        <!-- Cards -->
        <section class="cards">
            <a class="card card-recpro" href="<?php echo esc_url( $whatsapp_url ); ?>" target="_blank" rel="noopener noreferrer">
                <span class="card-icon" style="background:linear-gradient(135deg,#374151,#111827);">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.6 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.44ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.86 9.86 0 0 1-1.52-5.28c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.43 9.92-9.87 9.92Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
                    </svg>
                </span>
                <span class="card-body">
                    <span class="card-title">RECPRO | Audiovisual</span>
                    <span class="card-desc">Fale com a gente pelo WhatsApp.</span>
                </span>
                <span class="card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </span>
            </a>
        </section>

        <footer class="footer">
            <div class="socials">
                <a class="social" href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a class="social" href="<?php echo esc_url( $whatsapp_url ); ?>" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </a>
                <a class="social" href="<?php echo esc_url( $email ); ?>" aria-label="E-mail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
            </div>
            <p class="copyright">&copy; <?php echo esc_html( date( 'Y' ) ); ?> Raul Eleutério. Todos os direitos reservados.</p>
        </footer>
    </div>
</main>
<?php get_footer(); ?>
