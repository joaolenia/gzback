import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Interfaces para tipar os dados que serão salvos nas colunas JSON
export interface ItemList {
  id: string;
  name: string;
  qty: number;
  price: number;
  discount: number;
}

@Entity('service_orders') // Nome da tabela no banco de dados
export class ServiceOrder {
  @PrimaryGeneratedColumn()
  id?: number; // Corresponde ao Nº O.S.

  // ================= DADOS DO CLIENTE =================
  @Column({ name: 'client_name' })
  clientName?: string;

  @Column({ name: 'client_cpf', nullable: true })
  clientCpf?: string;

  @Column({ name: 'client_phone', nullable: true })
  clientPhone?: string;

  // ================= DADOS DO VEÍCULO =================
  @Column({ name: 'vehicle_name', nullable: true })
  vehicleName?: string;

  @Column({ name: 'vehicle_plate', nullable: true })
  vehiclePlate?: string;

  @Column({ name: 'vehicle_year', nullable: true })
  vehicleYear?: string;

  @Column({ name: 'vehicle_color', nullable: true })
  vehicleColor?: string;

  // ================= INFORMAÇÕES DA OS =================
  @Column({ name: 'entry_date', nullable: true })
  entryDate?: string; // Ex: '21/07/2026'

  @Column({ name: 'delivery_date', nullable: true })
  deliveryDate?: string;

  @Column({ nullable: true })
  mechanic?: string; // Responsável (ex: gzcentro)

  @Column({ default: 'Normal' })
  priority?: string;

  @Column({ default: 'Pendente' })
  status?: string; // Pendente, Em andamento, Concluído

  @Column('text', { name: 'client_request', nullable: true })
  clientRequest?: string; // Solicitações do cliente

    @Column('text', { name: 'observations', nullable: true })
  observations?: string;

  // ================= PEÇAS E SERVIÇOS (JSON) =================
  // O MySQL a partir da versão 5.7 suporta colunas JSON nativamente
  @Column('json', { nullable: true })
  parts?: ItemList[];

  @Column('json', { nullable: true })
  services?: ItemList[];

  // ================= TIMESTAMPS AUTOMÁTICOS =================
  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
}