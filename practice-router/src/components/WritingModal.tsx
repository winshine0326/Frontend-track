import React, { useState, useEffect } from 'react';
// import '../styles.css';

interface WriteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
  initialTitle?: string;
}

const WriteModal: React.FC<WriteModalProps> = ({ isOpen, onClose, onSubmit, initialTitle }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 initialTitle이 있으면 설정
      setTitle(initialTitle || '');
    }
  }, [isOpen, initialTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit(title);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialTitle ? '게시글 수정' : '새 게시글 작성'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="submit-button">
              {initialTitle ? '수정' : '작성'}
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteModal;