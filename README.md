# Charlotte Club Swimming Website

This guide explains how to update the content on the Charlotte Club Swimming website. All the site's data is stored in JSON files that can be edited directly.

## Where to Find the Data Files

All data files are located in the `src/json` folder:
- `officers.json`: Officer information
- `meets.json`: Competition schedule
- `records.json`: Swimming records

## How to Edit Officer Information

The officer information is stored in `src/json/officers.json`. Each officer has the following fields:
```json
{
    "name": "John Doe",
    "title": "President",
    "email": "president@charlotte.edu",
    "image": "./assets/officers/officer-placeholder.jpg"
}
```

To update an officer:
1. Find the officer you want to update in the file
2. Change the values between the quotation marks
3. Make sure to keep the quotation marks and commas
4. Don't change the field names (name, title, email, image)

Example:
```json
{
    "name": "Jane Smith",      // Change just the text between the quotes
    "title": "President",      // Keep the quotes and commas
    "email": "new@email.com",  // Make sure the email is correct
    "image": "./assets/officers/officer-placeholder.jpg"  // Add image to public/assets/officers and change the filepath
}
```

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

To add a new meet:
1. Find the correct season (e.g., "2023-2024")
2. Find the correct semester ("fall" or "spring")
3. Copy an existing meet entry and paste it in the right section
4. Update all the fields with the new meet's information
5. Make sure to add/remove commas appropriately:
   - Add a comma after each meet EXCEPT the last one in a section

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

For relay records, use "names" instead of "name":
```json
{
    "event": "200 Free Relay",
    "time": "1:24.56",
    "names": "Swimmer 1, Swimmer 2, Swimmer 3, Swimmer 4",
    "year": "2024",
    "link": "video-link"  // Optional - remove if no video
}
```

To update a record:
1. Find the correct category (mens/womens)
2. Find the correct stroke category (freestyle, backstroke, etc.)
3. Find the specific event
4. Update the values between the quotation marks
5. Keep all punctuation (quotes, commas) exactly as shown

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
