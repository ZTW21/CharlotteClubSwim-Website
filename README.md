# Charlotte Club Swimming Website

Development Site: [charlotte-club-swim-website](https://charlotte-club-swim-website.vercel.app/)

This guide explains how to update the content on the Charlotte Club Swimming website. All the site's data is stored in JSON files that can be edited directly.

## Where to Find the Data Files

All data files are located in the `src/json` folder:
- `officers.json`: Officer information
- `meets.json`: Competition schedule
- `records.json`: Swimming records
- `social.json`: Social media links and footer information
- `photos.json`: Photo gallery information

## University Branding

The UNCC "All-in-C" logo is used in several places throughout the site:
- Navigation header (40px height)
- Footer (50px height, inverted to white)

To update the logo:
1. Replace the logo at `public/assets/branding/All-in-C.png`
2. Keep the same filename
3. Use a PNG file with transparent background
4. Recommended size: at least 200x200 pixels
5. The logo will automatically be sized appropriately and inverted in the footer

## How to Edit Officer Information

The officer information is stored in `src/json/officers.json`. Each officer has the following fields:
```json
{
    "name": "John Doe",
    "title": "President",
    "email": "president@charlotte.edu",
    "image": "./assets/officers/officer-placeholder.jpg" //Add images of the officers in public/assets/officers and change the filenames appropriately.
}
```

To update an officer:
1. Find the officer you want to update in the file
2. Change the values between the quotation marks
3. Make sure to keep the quotation marks and commas
4. Don't change the field names (name, title, email, image)

## How to Edit Meet Information

The meet schedule is stored in `src/json/meets.json`. Meets are organized by season and semester.

Each meet has these fields:
```json
{
    "name": "Meet Name",
    "date": "March 1-2, 2024",
    "location": "Pool Location",
    "description": "Description of the meet",
    "locationType": "away",    // Use "home" for home meets
    "meetPacket": "link-to-packet",  // Optional - remove if no packet
    "results": "link-to-results"     // Optional - remove if no results
}
```

## How to Edit Records

The swimming records are stored in `src/json/records.json`. Records are separated into men's and women's categories, plus mixed relays.

Each record has these fields:
```json
{
    "event": "50 Free",
    "time": "20.45",
    "name": "Swimmer Name",
    "year": "2024",
    "link": "video-link"  // Optional - remove if no video
}
```

## How to Manage Photo Galleries

The photo galleries are managed using Google Photos and configured in `src/json/photos.json`. This provides a free, high-quality solution for storing and sharing team photos.

### Setting Up a New Gallery

1. Create a new album in Google Photos:
   - Open Google Photos (photos.google.com)
   - Click "Create Album"
   - Upload your photos
   - Give the album a descriptive name

2. Share the album:
   - Open the album
   - Click the share icon
   - Click "Create link"
   - Copy the link

3. Get the album thumbnail:
   - Open the album
   - Right-click the photo you want as thumbnail
   - Copy the image address

4. Add the gallery to `photos.json`:
```json
{
    "title": "Event Name",
    "date": "Month Day, Year",
    "description": "Brief description of the event",
    "thumbnailUrl": "copied-thumbnail-url",
    "albumUrl": "copied-album-link",
    "photoCount": "XX photos"
}
```

### Tips for Photo Management

1. Image Quality:
   - Upload high-resolution photos
   - Google Photos maintains original quality
   - Users can download full-resolution images

2. Album Organization:
   - Create separate albums for each event
   - Use consistent naming (e.g., "Fall 2023 Championship Meet")
   - Choose a good cover photo for the thumbnail

3. Privacy:
   - Only share albums using links
   - Don't make albums publicly searchable
   - Test the link before adding to the website

## How to Edit Social Media Links

The social media information is stored in `src/json/social.json`. This file controls the footer's social media buttons and copyright text.

### Adding Social Media Buttons

The website uses Font Awesome icons for social media buttons. Here's how to add different social media platforms:

1. Common Social Media Icons:
```json
{
    "platform": "Instagram",
    "url": "https://instagram.com/yourhandle",
    "icon": "fab fa-instagram"
},
{
    "platform": "Facebook",
    "url": "https://facebook.com/yourpage",
    "icon": "fab fa-facebook"
},
{
    "platform": "Twitter",
    "url": "https://twitter.com/yourhandle",
    "icon": "fab fa-twitter"
},
{
    "platform": "YouTube",
    "url": "https://youtube.com/@yourchannel",
    "icon": "fab fa-youtube"
},
{
    "platform": "TikTok",
    "url": "https://tiktok.com/@yourhandle",
    "icon": "fab fa-tiktok"
},
{
    "platform": "LinkedIn",
    "url": "https://linkedin.com/company/yourpage",
    "icon": "fab fa-linkedin"
}
```

2. How to Add a New Platform:
   - Open `src/json/social.json`
   - Add a new object to the `socialLinks` array
   - Include platform name, URL, and icon class
   - Make sure to add commas between objects

3. Icon Format:
   - All icons start with `fab fa-` prefix
   - Followed by the platform name in lowercase
   - Example: `fab fa-instagram` for Instagram

4. Example of Multiple Platforms:
```json
{
  "socialLinks": [
    {
      "platform": "Instagram",
      "url": "https://instagram.com/unccclubswim",
      "icon": "fab fa-instagram"
    },
    {
      "platform": "Facebook",
      "url": "https://facebook.com/unccclubswim",
      "icon": "fab fa-facebook"
    },
    {
      "platform": "Twitter",
      "url": "https://twitter.com/unccclubswim",
      "icon": "fab fa-twitter"
    }
  ],
  "copyright": "© 2025 Charlotte Club Swimming. All rights reserved."
}
```

## Important Notes

1. Always keep the file structure exactly as is - don't add or remove curly braces, square brackets, or commas unless you're adding/removing entire entries
2. Make sure all quotation marks are straight quotes (`"`) not curly quotes (`"` or `"`)
3. After each entry except the last one in a section, there must be a comma
4. Times should be in the format:
   - Sprints: "23.45"
   - Middle distance: "1:23.45"
   - Distance: "10:23.45"
5. Dates should be consistent: "Month Day, Year" or "Month Day-Day, Year"

## Need Help?

If you're unsure about making changes or encounter any issues, please contact the website administrator for assistance.
