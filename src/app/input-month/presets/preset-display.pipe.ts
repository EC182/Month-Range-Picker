import { Pipe, PipeTransform } from '@angular/core';
import { CustomPreset, Preset, Localization } from '../types';

@Pipe({
  name: 'presetDisplay'
})
export class PresetDisplayPipe implements PipeTransform {
  transform(value: Preset): string {
      return typeof value === "object" ? (value as CustomPreset).name : Localization.presets[value];
  }
}