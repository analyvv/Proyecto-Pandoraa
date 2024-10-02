function toggleEvidence() {
    const evidencePhotos = document.getElementById('evidence-photos');
    if (evidencePhotos.classList.contains('hidden')) {
        evidencePhotos.classList.remove('hidden');
    } else {
        evidencePhotos.classList.add('hidden');
    }
}

// Al cargar la página, ocultar todas las secciones menos la principal
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id !== 'quienes-somos') {
            section.classList.add('hidden');
        }
    });
});
