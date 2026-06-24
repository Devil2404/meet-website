const fs = require('fs');
const path = require('path');

function processDir(dir, routePrefix = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const newRoutePrefix = file === '(main)' || file.startsWith('(') ? routePrefix : `${routePrefix}/${file}`;
      processDir(fullPath, newRoutePrefix);
    } else if (file === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let canonicalRoute = routePrefix || '/';
      // If it's a dynamic route, e.g. [slug], it's harder, but there are none in the grep output.
      
      // Look for export const metadata
      if (content.includes('export const metadata')) {
        if (!content.includes('alternates:')) {
          // Replace `export const metadata = {` or `export const metadata: Metadata = {`
          content = content.replace(/(export const metadata(?:[^{]+)?= {)/, `$1\n  alternates: {\n    canonical: '${canonicalRoute}',\n  },`);
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Updated ${fullPath} with canonical: ${canonicalRoute}`);
        }
      }
    }
  }
}

const appDir = path.join(__dirname, 'app');
processDir(appDir, '');
