window.addEventListener('scroll', function () {
    //Makes navigation bar visible after scrolling to bottom too
    if (document.documentElement.scrollTop == 0) {
        document.getElementById("navbar").classList.remove("scrolled");
    } else {
        document.getElementById("navbar").classList.add("scrolled");
    }
});

// Download modal system
let pendingDownloadUrl = '';

function showDonationModal(downloadUrl) {
    pendingDownloadUrl = downloadUrl;
    const modal = new bootstrap.Modal(document.getElementById('downloadDonationModal'));
    modal.show();
}

function proceedToDownload() {
    if (pendingDownloadUrl) {
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = pendingDownloadUrl;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Hide modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('downloadDonationModal'));
        modal.hide();
        pendingDownloadUrl = '';
    }
}

function skipToDownload() {
    proceedToDownload();
}

// Toggle expandable sections in modal
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const icon = document.querySelector(`[onclick="toggleSection('${sectionId}')"] i`);
    
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        section.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Custom donation modal functionality
function showCustomDonationModal() {
    // Hide the download modal
    const downloadModal = bootstrap.Modal.getInstance(document.getElementById('downloadDonationModal'));
    downloadModal.hide();
    
    // Show custom donation modal
    const customModal = new bootstrap.Modal(document.getElementById('customDonationModal'));
    customModal.show();
}

function backToDownloadModal() {
    // Hide custom donation modal
    const customModal = bootstrap.Modal.getInstance(document.getElementById('customDonationModal'));
    customModal.hide();
    
    // Show download modal again
    const downloadModal = new bootstrap.Modal(document.getElementById('downloadDonationModal'));
    downloadModal.show();
}