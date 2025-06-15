#!/bin/bash

# Files to update (excluding index.html, documents.html, and dqa002.html which are already updated)
files=(
    "blog.html"
    "dnt1.html" 
    "downloads.html"
    "downloads3.html"
    "dqa004.html"
    "dqa006.html"
    "dqa007.html"
    "dqa008.html"
    "dqa009.html"
    "dqa010.html"
    "dqa011.html"
    "dqa012.html"
    "dqa014.html"
    "dqa018.html"
    "partner.html"
)

cd /Users/kevin/Documents/GitHub/q4os-website-new

for file in "${files[@]}"; do
    echo "Updating $file..."
    
    # Update Twitter URL to X
    sed -i '' 's|https://twitter\.com/q4osteam|https://x.com/q4osteam|g' "$file"
    
    # Update Twitter text to X (Twitter)
    sed -i '' 's|>Twitter</a>|>X (Twitter)</a>|g' "$file"
    
    # Add Mastodon before X link and update formatting
    sed -i '' 's|<li><a href="https://x\.com/q4osteam" target="_blank" rel="noopener" class="text-decoration-none">X (Twitter)</a></li>|<li><a href="https://floss.social/@q4os" target="_blank" rel="noopener" class="text-decoration-underline">Mastodon</a></li>\
						<li><a href="https://x.com/q4osteam" target="_blank" rel="noopener" class="text-decoration-underline">X (Twitter)</a></li>|' "$file"
    
    # Update all text-decoration-none to text-decoration-underline in footer links
    sed -i '' 's|class="text-decoration-none"|class="text-decoration-underline"|g' "$file"
    
    # Remove social media image icons section
    sed -i '' '/<nav aria-label="Social media icons"/,/<\/nav>/d' "$file"
    
    # Update copyright year to use current-year span
    sed -i '' 's|&copy; Q4OS\.|&copy; <span id="current-year">2024</span> Q4OS.|g' "$file"
    
    # Add underline to KevDoy link
    sed -i '' 's|text-decoration: none;|text-decoration: underline;|g' "$file"
    
    # Add script to update copyright year before closing body tag
    if ! grep -q "current-year" "$file"; then
        sed -i '' 's|</body>|	<!-- Update copyright year -->\
	<script>\
		document.getElementById('\''current-year'\'').textContent = new Date().getFullYear();\
	</script>\
</body>|' "$file"
    fi
    
    echo "✓ Updated $file"
done

echo "All files updated!"
