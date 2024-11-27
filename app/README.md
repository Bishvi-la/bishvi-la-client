
# How to Create a New Route/Folder of Routes in `expo-router`

This documentation provides step-by-step instructions to create a new route or folder of routes using `expo-router`.

---

## 1. Basic Route Creation
### Steps:
1. **Create a File Inside the `app/` Folder:**
   - Each file in the `app/` folder represents a route.
   - Example:
     - `app/profile.tsx` → `/profile`
     - `app/about.tsx` → `/about`

2. **Export a Default Component:**
   - Example:
     ```tsx
     import React from 'react';
     import { View, Text } from 'react-native';

     export default function Profile() {
       return (
         <View>
           <Text>Profile Page</Text>
         </View>
       );
     }
     ```

### Route Path Example:
- `app/profile.tsx` → URL: `/profile`

---

## 2. Nested Routes
### Steps:
1. **Create a Folder Inside `app/`:**
   - Example: `app/profile/`

2. **Add Files for Nested Routes:**
   - `app/profile/index.tsx` → `/profile`
   - `app/profile/settings.tsx` → `/profile/settings`

3. **Optional: Add `_layout.tsx`:**
   - To define a shared layout or navigation for all routes in the folder.
   - Example:
     ```tsx
     import { Stack } from 'expo-router';

     export default function ProfileLayout() {
       return (
         <Stack>
           <Stack.Screen name="index" options={{ title: 'Profile' }} />
           <Stack.Screen name="settings" options={{ title: 'Settings' }} />
         </Stack>
       );
     }
     ```

### Folder Structure Example:
```
app/
  profile/
    _layout.tsx      // Optional layout for all profile routes
    index.tsx        // URL: /profile
    settings.tsx     // URL: /profile/settings
```

---

## 3. Dynamic Routes
### Steps:
1. **Create a File or Folder With Square Brackets in the Name:**
   - Example: `app/profile/[id].tsx`

2. **Access the Dynamic Parameter:**
   - Use `useSearchParams` to get the value of `id`.
   - Example:
     ```tsx
     import { useSearchParams } from 'expo-router';
     import React from 'react';
     import { View, Text } from 'react-native';

     export default function ProfileDetail() {
       const { id } = useSearchParams();

       return (
         <View>
           <Text>Profile ID: {id}</Text>
         </View>
       );
     }
     ```

### Route Path Example:
- `app/profile/[id].tsx` → `/profile/:id`

---

## 4. Group Folders (Optional)
### Steps:
1. **Enclose a Folder Name in Parentheses:**
   - Group folders organize files without adding them to the URL.
   - Example: `(auth)/`

2. **Structure Your Routes:**
   - Example:
     ```
     app/
       (auth)/
         login.tsx      // URL: /login
         signup.tsx     // URL: /signup
     ```

### Use Case:
- Use group folders for organizing files logically (e.g., `(auth)` for authentication-related routes).

---

## 5. Navigation
Use `useRouter` to navigate between routes:
```tsx
import { useRouter } from 'expo-router';

const router = useRouter();

// Navigate to a route
router.push('/profile/settings');
```

---

## 6. Testing Routes
1. **Run the Development Server:**
   ```bash
   expo start
   ```

2. **View the Sitemap:**
   - Use the **"Sitemap"** link on the app's error page to see all registered routes.

---

## Summary
- **Single Page:** Create a file (e.g., `app/page.tsx`).
- **Nested Routes:** Use folders and `index.tsx`.
- **Dynamic Routes:** Use `[param].tsx` for parameterized URLs.
- **Shared Layouts:** Use `_layout.tsx` for consistent navigation or layout.

This process ensures your routes are recognized and function correctly in `expo-router`.
