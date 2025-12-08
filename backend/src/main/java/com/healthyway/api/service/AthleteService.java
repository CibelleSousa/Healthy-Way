package com.healthyway.api.service;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.repository.AthleteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // 1. Diz ao Spring: "Esta classe contém regras de negócio"
public class AthleteService {

    // 2. Injeção de Dependência: Precisamos do Repository aqui dentro
    private final AthleteRepository repository;

    public AthleteService(AthleteRepository repository) {
        this.repository = repository;
    }

    // 3. Método para listar todos
    public List<Athlete> findAll() {
        return repository.findAll(); // O JpaRepository já faz o SELECT * FROM athlete
    }

    // 4. Método para lista pelo ID
    public Optional<Athlete> findById(Long id) {
        // O 'Optional' é uma caixa que pode ter um Atleta ou estar vazia (se não achar)
        return repository.findById(id); 
    }

    // 5. Método para deletar um atleta pelo ID
    public void delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            // Opcional: Lançar erro se não achar, mas por enquanto vamos só ignorar
            throw new RuntimeException("Atleta não encontrado para deleção");
        }
    }

    // 6. Método para adicionar um atleta novo
    public Athlete create(Athlete athlete) {
        // O método .save() do JPA serve tanto para criar quanto para atualizar.
        // Se o ID for nulo, ele cria. Se tiver ID, ele atualiza.
        return repository.save(athlete);
    }

    // 7. Método para atualizar os dados de um atleta
    public Athlete update(Long id, Athlete atletaComNovosDados) {
        // Verifica se existe antes de tentar atualizar
        if (!repository.existsById(id)) {
            throw new RuntimeException("Atleta não encontrado para atualização");
        }
        // Garante que o ID do objeto é o mesmo que passamos na URL
        // (Isso evita que alguém tente mudar o ID do atleta por acidente)
        atletaComNovosDados.setId(id);

        // Salva (Como o ID já existe no banco, o JPA entende que é um UPDATE)
        return repository.save(atletaComNovosDados);
    }

}