import { View } from 'react-native';
import {
  Screen,
  Text,
  Button,
  Input,
  Card,
  Avatar,
  Badge,
  Divider,
  Spinner,
} from '@/components/ui';
import { useThemeStore } from '@/store';
import type { ThemePreference } from '@/store/theme.store';
import { useState } from 'react';
import { Search, Mail } from 'lucide-react-native';

export default function ComponentsShowcase() {
  const preference = useThemeStore((s) => s.preference);
  const setPreference = useThemeStore((s) => s.setPreference);
  const themes: ThemePreference[] = ['light', 'dark', 'system'];

  const [emailValue, setEmailValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid');

  return (
    <Screen scrollable>
      <View className="gap-y-8 py-4">
        {/* Theme switcher */}
        <Card variant="outlined">
          <Text variant="h4" className="mb-3">
            Theme
          </Text>
          <View className="flex-row gap-2">
            {themes.map((t) => (
              <Button
                key={t}
                label={t}
                variant={preference === t ? 'primary' : 'secondary'}
                size="sm"
                onPress={() => setPreference(t)}
                className="flex-1"
              />
            ))}
          </View>
        </Card>

        {/* Text */}
        <View>
          <Text variant="h2" className="mb-3">
            Text
          </Text>
          <View className="gap-2">
            <Text variant="h1">Heading 1</Text>
            <Text variant="h2">Heading 2</Text>
            <Text variant="h3">Heading 3</Text>
            <Text variant="h4">Heading 4</Text>
            <Text variant="body-lg">Body large</Text>
            <Text variant="body">Body regular</Text>
            <Text variant="body-sm">Body small</Text>
            <Text variant="caption">Caption</Text>
            <Text variant="label">Label</Text>
            <Text variant="overline">Overline</Text>
            <Text color="muted">Muted color</Text>
            <Text color="primary">Primary color</Text>
            <Text color="success">Success color</Text>
            <Text color="warning">Warning color</Text>
            <Text color="danger">Danger color</Text>
          </View>
        </View>

        <Divider />

        {/* Buttons */}
        <View>
          <Text variant="h2" className="mb-3">
            Buttons
          </Text>
          <View className="gap-3">
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Ghost" variant="ghost" />
            <Button label="Danger" variant="danger" />
            <Button label="Loading" loading />
            <Button label="Disabled" disabled />
            <Button label="Small" size="sm" />
            <Button label="Medium" size="md" />
            <Button label="Large" size="lg" />
            <Button label="Full Width" fullWidth />
          </View>
        </View>

        <Divider />

        {/* Inputs */}
        <View>
          <Text variant="h2" className="mb-3">
            Inputs
          </Text>
          <View className="gap-4">
            <Input
              label="Email"
              placeholder="you@example.com"
              value={emailValue}
              onChangeText={setEmailValue}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<Mail size={18} color="rgb(148 163 184)" />}
            />
            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<Search size={18} color="rgb(148 163 184)" />}
            />
            <Input
              label="With helper"
              placeholder="Type something"
              helperText="This is a helper message"
            />
            <Input
              label="With error"
              placeholder="Type something"
              value={errorValue}
              onChangeText={setErrorValue}
              error="This field has an error"
            />
            <Input label="Disabled" placeholder="Can't type here" disabled />
          </View>
        </View>

        <Divider />

        {/* Cards */}
        <View>
          <Text variant="h2" className="mb-3">
            Cards
          </Text>
          <View className="gap-3">
            <Card variant="elevated">
              <Text variant="h4">Elevated Card</Text>
              <Text color="muted" className="mt-1">
                Uses shadow for elevation.
              </Text>
            </Card>
            <Card variant="outlined">
              <Text variant="h4">Outlined Card</Text>
              <Text color="muted" className="mt-1">
                Uses border instead of shadow.
              </Text>
            </Card>
            <Card variant="flat">
              <Text variant="h4">Flat Card</Text>
              <Text color="muted" className="mt-1">
                No border or shadow.
              </Text>
            </Card>
          </View>
        </View>

        <Divider />

        {/* Avatars */}
        <View>
          <Text variant="h2" className="mb-3">
            Avatars
          </Text>
          <View className="flex-row items-center gap-3">
            <Avatar size="sm" fallback="NM" />
            <Avatar size="md" fallback="JD" />
            <Avatar size="lg" fallback="AS" />
            <Avatar size="xl" fallback="RK" />
          </View>
          <View className="mt-3 flex-row items-center gap-3">
            <Avatar size="md" source="https://i.pravatar.cc/150?img=12" fallback="ZZ" />
            <Avatar size="lg" source="https://i.pravatar.cc/150?img=33" fallback="ZZ" />
          </View>
        </View>

        <Divider />

        {/* Badges */}
        <View>
          <Text variant="h2" className="mb-3">
            Badges
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <Badge label="Default" variant="default" />
            <Badge label="Primary" variant="primary" />
            <Badge label="Success" variant="success" />
            <Badge label="Warning" variant="warning" />
            <Badge label="Danger" variant="danger" />
            <Badge label="Medium" variant="primary" size="md" />
          </View>
        </View>

        <Divider />

        {/* Spinners */}
        <View>
          <Text variant="h2" className="mb-3">
            Spinners
          </Text>
          <View className="flex-row items-center gap-6">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </View>
        </View>

        <View className="h-12" />
      </View>
    </Screen>
  );
}
