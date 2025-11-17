// 1. Precisamos do 'Output' e 'EventEmitter'
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

// 2. Precisamos do 'MatIconModule' (se usarmos ícones do Material)
//    ou apenas do CommonModule e Font Awesome (como estamos fazendo)

@Component({
  selector: 'app-search-bar',
  standalone: true,
  // 3. Importe o CommonModule para o *ngIf, etc.
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  // 4. A "Porta de Saída" (@Output)
  //    Isso cria um evento personalizado chamado 'search'.
  //    Ele vai "emitir" (enviar) um dado do tipo 'string'.
  @Output() search = new EventEmitter<string>();

  // 5. A função chamada pelo HTML
  onSearch(event: Event): void {
    
    // 6. O 'event.target' é o elemento <input>
    //    Precisamos "dizer" ao TypeScript que ele é um HTMLInputElement
    const input = event.target as HTMLInputElement;

    // 7. Pegamos o valor que o usuário digitou
    const query = input.value;

    // 8. "Gritamos" (emit) o valor de volta para o componente Pai
    //    através da nossa porta de saída 'search'.
    this.search.emit(query);
  }
}