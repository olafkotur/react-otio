// animations
import { animateChangeColor } from './animations/animate-change-color';
import { animateFade } from './animations/animate-fade';
import { animateRotate } from './animations/animate-rotate';
import { animateScaleOnTap } from './animations/animate-scale-on-tap';
import { animateSlide } from './animations/animate-slide';
import { animateVisibility } from './animations/animate-visibility';

// components
import { Avatar } from './components/Avatar';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Card } from './components/Card';
import {
  CenterContainer,
  ColumnContainer,
  OverflowTextContainer,
  RowBetweenContainer,
  RowContainer,
  SpaceBetweenContainer,
} from './components/Container';
import { DragDrop } from './components/DragDrop';
import { Header } from './components/Header';
import { Icon, IconName } from './components/Icon';
import { FileInput, NumberInput, TextInput } from './components/Input';
import { Loader } from './components/Loader';
import { Spacer } from './components/Spacer';
import { Spinner } from './components/Spinner';
import { LargeText, MediumText, SmallText, VeryLargeText, VerySmallText } from './components/Text';
import { Tooltip } from './components/Tooltip';

// hooks
import { useBreakpoints } from './hooks/use-breakpoints';
import { useClipboardCopy } from './hooks/use-clipboard';
import {
  useFormatCurrency,
  useFormatDate,
  useFormatMinutesUntilNextHour,
  useFormatPercent,
  useFormatRelativeTime,
} from './hooks/use-format';
import { useOnClickout } from './hooks/use-on-clickout';
import { useOnKeyPress } from './hooks/use-on-keypress';
import { useClearStorage, useGetStorage, useRemoveStorage, useSetStorage } from './hooks/use-storage';
import { useUpdateTitle } from './hooks/use-update-title';

const animations = {
  animateChangeColor,
  animateFade,
  animateRotate,
  animateScaleOnTap,
  animateSlide,
  animateVisibility,
};

const components = {
  Avatar,
  Button,
  Card,
  CenterContainer,
  RowContainer,
  ColumnContainer,
  RowBetweenContainer,
  SpaceBetweenContainer,
  OverflowTextContainer,
  DragDrop,
  Header,
  Icon,
  IconName,
  TextInput,
  NumberInput,
  FileInput,
  Loader,
  Spacer,
  Spinner,
  VeryLargeText,
  LargeText,
  MediumText,
  SmallText,
  VerySmallText,
  Tooltip,
  Box,
};

const hooks = {
  useBreakpoints,
  useClipboardCopy,
  useFormatDate,
  useFormatCurrency,
  useFormatPercent,
  useFormatRelativeTime,
  useFormatMinutesUntilNextHour,
  useOnClickout,
  useOnKeyPress,
  useClearStorage,
  useGetStorage,
  useRemoveStorage,
  useSetStorage,
  useUpdateTitle,
};

const Otio = { animations, components, hooks };

export {
  // components
  Avatar,
  Box,
  Button,
  Card,
  CenterContainer,
  ColumnContainer,
  DragDrop,
  FileInput,
  Header,
  Icon,
  IconName,
  LargeText,
  Loader,
  MediumText,
  NumberInput,
  OverflowTextContainer,
  RowBetweenContainer,
  RowContainer,
  SmallText,
  SpaceBetweenContainer,
  Spacer,
  Spinner,
  TextInput,
  Tooltip,
  VeryLargeText,
  VerySmallText,
  // animations
  animateChangeColor,
  animateFade,
  animateRotate,
  animateScaleOnTap,
  animateSlide,
  animateVisibility,
  // hooks
  useBreakpoints,
  useClearStorage,
  useClipboardCopy,
  useFormatCurrency,
  useFormatDate,
  useFormatMinutesUntilNextHour,
  useFormatPercent,
  useFormatRelativeTime,
  useGetStorage,
  useOnClickout,
  useOnKeyPress,
  useRemoveStorage,
  useSetStorage,
  useUpdateTitle,
};

export default Otio;
